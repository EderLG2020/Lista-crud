function ErrorForm({ mensaje }) {
  return (
    <div className="bg-red-800 text-white text-center p-3 uppercase font-bold rounded-md">
      <p>{mensaje}</p>
    </div>
  );
}

export default ErrorForm;
