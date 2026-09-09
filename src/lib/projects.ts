export const projects = [
  {
    slug: 'pharmacy-management', number: '01', title: 'Pharmacy Management System', discipline: 'Full-stack product', role: 'Sole developer',
    headline: 'From prescription to payment, in one connected workflow.',
    summary: 'A pharmacy product connecting prescription intake, batch inventory, dispensing, billing, payments, and reporting. I built the Flutter Web interface, PHP APIs, and MySQL data model across the full workflow.',
    introduction: 'A pharmacy sale changes several things at once: the medicine on the shelf, the bill, the payment record, and sometimes a connected inventory system. I built the product around those relationships, with explicit batch selection in the interface and coordinated state changes in the backend.',
    technologies: 'Flutter Web · PHP Slim · MySQL',
    figureTitle: 'One sale. Four connected steps.',
    steps: [
      { title: 'Choose a batch', text: 'Review the item, expiry, and available quantity.' },
      { title: 'Validate stock', text: 'The backend checks the exact stock row and quantity.' },
      { title: 'Save the sale', text: 'Bill, local stock changes, and any sync event are saved together.' },
      { title: 'Sync inventory', text: 'A connected-inventory update is attempted after the local sale commits.' },
    ],
    flowNote: 'The local sale is saved first, with a record of any inventory update still to send. Local-only stock does not require remote synchronization.',
    sections: [
      { id: 'problem', title: 'A sale is more than a receipt.', paragraphs: [
        'Pharmacy staff need to move from a prescription to the correct stock batch, check the quantity, prepare a bill, and record how it was paid. Each of those actions changes information that the next action depends on. Treating them as unrelated forms makes it harder to keep the workflow consistent.',
        'The product also sits within the wider Ayusmart SmartCare ecosystem. Some stock is managed locally; some comes from a connected inventory system. The design needed to make those sources understandable while keeping the day-to-day dispensing experience focused on the item, batch, and available quantity.',
      ] },
      { id: 'build', title: 'I built the workflow from both sides.', paragraphs: [
        'I solely developed the Pharmacy Management System across its Flutter Web frontend, PHP Slim REST APIs, and MySQL data model. The scope includes prescription intake, batch-level inventory, dispensing, billing, payment, and reporting workflows, together with their API and deployment integration.',
        'In the dispenser interface, staff can begin from a prescription or handle a walk-in sale. Choosing an item opens a batch selection view with its batch number, expiry, stock source, and available quantity. The cart preserves that batch identity as quantities change. Stock checks and input feedback help staff resolve a problem before submitting the sale.',
        'The interface includes keyboard focus handling and a compact batch-selection layout for smaller screens. These details matter because a busy operational screen has to remain understandable through repeated actions. The interactive example in this portfolio isolates that batch-and-quantity decision using fictional data.',
      ] },
      { id: 'decisions', title: 'Keep the bill and stock changes together.', paragraphs: [
        'The backend does not trust a product name or a quantity alone. It checks the exact selected stock row against the item, batch, and expiry, validates the available amount, and resolves pricing from stored stock data. Row locking keeps that stock row stable while the sale is being processed.',
        'The bill, local stock changes, stock ledger, prescription status, and any inventory synchronization event are saved within a database transaction. If processing fails before the commit, the transaction can roll back rather than leave only part of the local sale recorded. Payment and fulfillment states are represented explicitly instead of being collapsed into one generic “done” flag.',
        'The connected inventory call happens after the local transaction commits. A stored outbox event records what must be sent, separating a completed local sale from a pending remote update. Event-key checks help the stock service recognize work already recorded. Local-only stock does not need that remote synchronization path.',
      ] },
      { id: 'result', title: 'A connected operational product.', paragraphs: [
        'The resulting implementation connects the core pharmacy workflow from prescription intake through dispensing, billing, payments, and reporting. Its most important engineering detail is the relationship between the interface and the data: the batch a staff member selects is the stock record the backend validates and applies to the bill.',
        'This project gave me responsibility for the whole product, including the boundaries between local transactions and connected systems. I learned to make those boundaries visible through clear states and useful feedback. Working across the interface and backend meant I could follow an action all the way from a staff member’s selection to the record it changed.',
      ] },
    ],
  },
  {
    slug: 'ayusmart-insights', number: '02', title: 'Ayusmart Insights', discipline: 'Data pipelines & analytics', role: 'Backend & pipeline development',
    headline: 'Hospital records, ready to tell a useful story.',
    summary: 'The backend and data pipelines behind hospital operational reporting. I built field mapping, synchronization, and API delivery to connect differently structured records with dashboards in Apache Superset.',
    introduction: 'A useful dashboard begins before the chart. Hospital systems use different fields, date formats, and record structures. My work on Ayusmart Insights focused on turning those inputs into consistent data that the analytics layer could use.',
    technologies: 'PHP Slim · PostgreSQL · REST APIs · Apache Superset',
    figureTitle: 'From source records to a shared view.',
    steps: [
      { title: 'Read the source', text: 'Select records using a configured source table and saved update timestamp.' },
      { title: 'Map the fields', text: 'Rename fields and normalize dates and text into the target structure.' },
      { title: 'Synchronize data', text: 'Send records through the API, with retries and failure logging.' },
      { title: 'Build the view', text: 'Use the prepared dataset in Apache Superset dashboards.' },
    ],
    flowNote: 'Refresh frequency depends on the source data and synchronization schedule. Apache Superset provides the dashboard layer.',
    sections: [
      { id: 'problem', title: 'The chart was only the visible part.', paragraphs: [
        'Hospital administrators need an operational view of information spread across different systems. Before that information can become a useful report, the records have to agree on what their fields mean. The same concept can have different names, formats, and update patterns in different source systems.',
        'Manual transformations make every new dataset another maintenance task. A date might arrive in one format, a name in separate fields, and a destination API expect a different structure altogether. The challenge was to make those differences explicit and repeatable rather than bury them in a one-off reporting script.',
      ] },
      { id: 'build', title: 'A repeatable path from records to reporting.', paragraphs: [
        'I built the backend and data pipelines for Ayusmart Insights, working on relational schemas, REST APIs, field mapping, and synchronization. The dashboard layer uses Apache Superset. My contribution sits in the data path beneath it and in integrating that path with the product’s reporting needs.',
        'The synchronization configuration names the source and target tables, the update timestamp, and the field mappings. A transformation helper turns each source row into the payload expected by the target API. It can normalize date values, trim text, convert case, and assemble a name from separate fields.',
        'The illustrated example on this page shows a date field becoming a normalized destination field. Its record is fictional, but the transformation is representative of the actual pipeline. Showing this intermediate step explains the work more directly than a chart with numbers whose origin is unclear.',
      ] },
      { id: 'decisions', title: 'Separate the mapping from the machinery.', paragraphs: [
        'Field mappings live in configuration rather than being written into the synchronization loop for each dataset. That gives the pipeline a consistent execution path while allowing source-specific differences to remain visible. A person maintaining it can inspect what is being renamed or transformed without first tracing the entire runner.',
        'The runner tracks synchronization progress with timestamps. It uses the previous saved position to select records for another run instead of blindly processing the entire source every time. That decision makes update semantics part of the pipeline design: source timestamps, successful deliveries, and failed records all need deliberate handling.',
        'The API sender uses bounded retries with increasing delays. Persistent failures are written to a separate log, so a failed record has a place to be investigated. This is a practical recovery aid, not a claim of guaranteed delivery or automatic replay. A reliable reporting operation still needs the source configuration, scheduling, and failure-handling process to be maintained.',
      ] },
      { id: 'result', title: 'The foundation beneath an operational dashboard.', paragraphs: [
        'The implementation supports configurable field transformation, incremental synchronization, API delivery, retries, and failure logging. Together, those capabilities connect source records to the analytics workflow and reduce the need to create an unrelated transformation for every dataset.',
        'Apache Superset supplies the interactive dashboard interface. My work prepares and delivers the data that feeds it. Reporting freshness depends on access to updated source records and the synchronization schedule, so the pipeline and its operational setup need to be considered alongside the dashboard itself.',
        'The project sharpened how I think about analytics: the usefulness of a chart depends on the decisions beneath it. Explicit mappings, inspectable progress, and visible failures are part of the product experience even when the person viewing the dashboard never sees them.',
      ] },
    ],
  },
  {
    slug: 'ayusmart-ai-platform', number: '03', title: 'Ayusmart AI Platform', discipline: 'AI systems & retrieval', role: 'Full-stack & AI contribution',
    headline: 'Patient history, with the relevant records in view.',
    summary: 'A healthcare AI platform that prepares patient-specific context for clinician review. I contributed across the frontend, APIs, document processing, retrieval, AI orchestration, and system integration.',
    introduction: 'An AI answer starts with a more basic question: are we looking at the correct patient and the relevant records? This platform brings patient selection, document processing, and source context into the same workflow before preparing a response.',
    technologies: 'React · FastAPI · Celery · MySQL · Qdrant · Redis',
    figureTitle: 'The records come before the response.',
    steps: [
      { title: 'Select the patient', text: 'Choose an explicit patient identity before submitting a request.' },
      { title: 'Find encounters', text: 'Resolve a visit or discover relevant history within that patient’s records.' },
      { title: 'Prepare context', text: 'Load the source notes, with references and any subset disclosure.' },
      { title: 'Support review', text: 'Prepare a response with source context for the clinician to inspect.' },
    ],
    flowNote: 'The platform assists clinician review. Source references support inspection; they do not establish the clinical correctness of an AI response.',
    sections: [
      { id: 'problem', title: 'The hard part starts before generation.', paragraphs: [
        'Patient history can arrive in uploaded documents or structured hospital records. A model cannot make that history useful simply by receiving more text. The system first needs the correct patient, the relevant encounters, and a clear connection between the response and the records used to prepare it.',
        'This made the task a full product and data-flow problem. Patient selection belongs in the interface. Record identity and encounter boundaries belong in the backend. Document processing must produce usable context, and the response needs to leave a person with something they can inspect rather than an unexplained block of generated text.',
      ] },
      { id: 'build', title: 'Connect the interface to the evidence.', paragraphs: [
        'I contributed across frontend and backend integration, FastAPI APIs, document transformation, retrieval workflows, and AI orchestration using LangChain and LangGraph. The broader system uses Celery and RabbitMQ for asynchronous processing, Redis for short-term session continuity, MinIO for object storage, and Qdrant for vector search.',
        'The clinician-facing workflow starts with a patient selected from the directory. The request carries that explicit identity instead of asking the model to infer which person the user means. The frontend provides loading feedback, contextual error messages, and source-reference presentation alongside the response.',
        'The platform has two ingestion paths. Generic uploads retain a staged document-processing and indexing workflow. Structured FHIR records—a standard representation for exchanging healthcare data—can be grouped by encounter and transformed into SOAP notes: subjective information, objective findings, assessment, and plan. The encounter-based chat path is controlled by a feature flag.',
      ] },
      { id: 'decisions', title: 'Make context selection explicit.', paragraphs: [
        'The encounter workflow stores generated notes in MySQL, archives them in MinIO, and indexes sections in Qdrant. MySQL acts as the authoritative store for those notes. Search can discover relevant encounters, but the system reloads the full stored notes to assemble the response context rather than relying on search excerpts alone.',
        'Requests such as “latest visit,” a specific encounter, or a particular date are resolved against encounter records. Topic and history queries use patient-filtered search for discovery. The context carries source references and a notice when only a subset of known encounters is included. This makes the scope of the answer more visible to the reviewer.',
        'The generation path compares a hash of the clinical source and the prompt version with the stored note. When both match, it can reuse that note. A publication-only operation can rebuild its archive and search representation from MySQL without another model call. These choices separate generation from storage and publication, making repeated work and recovery more deliberate.',
      ] },
      { id: 'result', title: 'A tool for review, with visible boundaries.', paragraphs: [
        'The implemented capabilities include document ingestion, structured extraction, patient-specific context preparation, encounter-note reuse, and source-linked response preparation. They support retrieval-augmented generation: finding relevant records before using them to prepare an AI response.',
        'The encounter-based SOAP path is feature-flagged, so its availability in the implementation should not be confused with a claim about every deployment. The platform is intended to assist clinician review; it does not establish autonomous diagnosis or replace clinical responsibility. Source references make review possible, but they do not guarantee the accuracy or completeness of a generated answer.',
        'My contribution to this project extended beyond calling a model. It involved connecting product behavior, data preparation, orchestration, and operational services. The lesson I take from it is specific: the usefulness of an AI feature depends on how well the entire system prepares, selects, and presents its context.',
      ] },
    ],
  },
];

export type Project = (typeof projects)[number];
