const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario_ {""}
        <span className="font-normal normal-case"> Juan</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email {""}
        <span className="font-normal normal-case"> correo@gmail.com: </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta {""}
        <span className="font-normal normal-case"> 10 Diciembre de 2022</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas {""}
        <span className="font-normal normal-case">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nostrum
          debitis magni officia, eius placeat reprehenderit nam distinctio atque
          eos laboriosam temporibus asperiores, quis nobis provident ab
          dignissimos soluta quo!
        </span>
      </p>
    </div>
  );
};

export default Paciente;
