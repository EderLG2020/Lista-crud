function ErrorForm({ mensaje, children }) {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-3 py-3 rounded relative mb-6"
      role="alert"
    >
      <strong className="font-bold">Error: </strong>
      <span className="block sm:inline">{mensaje}</span>
      {children}
    </div>
  );
}

export default ErrorForm;
