export default function Input({ label, id, error, errorText, ...props }) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input id="email" {...props} />
      <div className="control-error">{error && <p>{errorText}</p>}</div>
    </div>
  );
}
