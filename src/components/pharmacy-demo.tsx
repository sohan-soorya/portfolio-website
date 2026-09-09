'use client';

import { useId, useState } from 'react';
import { quantityError } from '@/lib/quantity';

const batches = [
  { id: 'A', expires: 'Dec 2027', available: 24 },
  { id: 'B', expires: 'Jun 2028', available: 48 },
];

export function PharmacyDemo() {
  const id = useId();
  const [selected, setSelected] = useState(batches[0]);
  const [quantity, setQuantity] = useState('8');
  const error = quantityError(quantity, selected.available);

  return (
    <figure className="demo-stage">
      <figcaption className="specimen-caption"><span className="tiny-square" aria-hidden="true" /> Interactive example · Sample data</figcaption>
      <div className="pharmacy-window">
        <div className="window-bar"><span className="window-brand"><span aria-hidden="true">✳</span> Pharmacy</span><span className="mono">Dispensing</span></div>
        <div className="demo-content">
          <div className="demo-heading"><div><p className="eyebrow">A detail that matters</p><h2>Choose the right batch.</h2></div><span className="specimen-mark" aria-hidden="true">↗</span></div>
          <p className="demo-intro">Same item. Different stock. Try a batch and quantity.</p>
          <fieldset className="batch-options">
            <legend className="sr-only">Select a sample batch</legend>
            {batches.map((batch) => (
              <label className={`batch-option ${selected.id === batch.id ? 'is-selected' : ''}`} key={batch.id}>
                <input type="radio" name={`${id}-batch`} value={batch.id} checked={selected.id === batch.id} onChange={() => setSelected(batch)} />
                <span className="batch-description"><strong>Sample batch {batch.id}</strong><span>Expires {batch.expires}</span></span>
                <span className="batch-stock"><strong>{batch.available}</strong><span>available</span></span>
              </label>
            ))}
          </fieldset>
          <div className="quantity-row"><label htmlFor={`${id}-quantity`}>Requested quantity<span>Whole units from this batch</span></label><input id={`${id}-quantity`} aria-describedby={`${id}-feedback`} aria-invalid={Boolean(error)} inputMode="numeric" type="number" min="1" max={selected.available} step="1" value={quantity} onChange={(event) => setQuantity(event.target.value)} /></div>
          <div className={`demo-feedback ${error ? 'has-error' : ''}`} id={`${id}-feedback`} role="status" aria-live="polite" aria-atomic="true">
            <span className="feedback-symbol" aria-hidden="true">{error ? '!' : '✓'}</span>
            <p>{error || `${Number(quantity)} units from batch ${selected.id} would be included in the bill.`}</p>
          </div>
          <noscript><p className="demo-intro">This illustration shows a sample batch. Enable JavaScript to try changing the selection.</p></noscript>
        </div>
      </div>
      <p className="stage-footnote"><span>Interface decisions, down to the batch.</span><span className="mono" aria-hidden="true">01 / 03</span></p>
    </figure>
  );
}
