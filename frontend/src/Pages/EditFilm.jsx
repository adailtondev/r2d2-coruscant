import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

EditFilm.propTypes = {
  id: PropTypes.string,
};

function EditFilm() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`https://r2d2-3nrw.onrender.com/movies/${id}`).then((response) => {
      if (response.status == 200) {
        response.json().then((json) => setMovie(json));
      } else {
      }
    });
  }, [id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(movie.id)
  const onSubmit = async (data) => {
    console.log()
    const response = await fetch(
      `https://r2d2-3nrw.onrender.com/movies/${movie.id}`,
      {
        body: JSON.stringify(data),
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
      }
    );
    console.log(response);

    if (response.status == 200) {
      navigate("/movies/");
    } else {
    }
  };

  return (
    <section className="h-auto">
      <div className="flex flex-col justify-center items-center mt-20 my-12">
        <div className="w-[80%] flex flex-col justify-center items-center gap-12 text-slate-50 text-2xl">
          <h2>O que deseja editar no filme?</h2>
          <h3>Preencha o formulário:</h3>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex relative flex-col justify-center items-center gap-6 max-w-screen-sm m-auto p-10  bg-gradient-to-tl from-cyan-900 to-transparent rounded-md"
      >
        <label htmlFor="name" className="text-slate-50">
          Nome
        </label>
        <input
          className={`rounded-lg p-2 w-full ${
            errors.name && "outline outline-2 outline-red-400"
          }`}
          placeholder={`${movie.name}`}
          id="name"
          {...register("name", {
            required: "name is required",
          })}
        />
        {errors.name && (
          <span className="text-red-400">{errors.name.message}</span>
        )}

        <label htmlFor="trilogy" className="text-slate-50">
          Trilogia
        </label>

        <select
          id="trilogy"
          className={`rounded-lg p-2 w-full ${
            errors.trilogy && "outline outline-2 outline-red-400"
          }`}
          defaultValue={"classic"}
          {...register("trilogy", {
            required: "trilogy is required",
          })}
        >
          <option value="classic">classic</option>
          <option value="prequel">prequel</option>
          <option value="sequel">sequel</option>
          <option value="spinoff">spinoff</option>
        </select>
        {errors.trilogy && (
          <span className="text-red-400">{errors.trilogy.message}</span>
        )}

        <label htmlFor="img" className="text-slate-50">
          Poster Url
        </label>
        <input
          className={`rounded-lg p-2 w-full ${
            errors.img && "outline outline-2 outline-red-400"
          }`}
          placeholder={`${movie.img}`}
          id="img"
          {...register("img", {})}
        />
        {errors.img && (
          <span className="text-red-400">{errors.img.message}</span>
        )}

        <label htmlFor="year" className="text-slate-50">
          Ano
        </label>
        <input
          type="number"
          className={`rounded-lg p-2 w-full ${
            errors.year && "outline outline-2 outline-red-400"
          }`}
          id="year"
          placeholder={`${movie.year}`}
          {...register("year", {
            valueAsNumber: true,
            min: {
              value: 1970,
              message: "year must be greater than 1970",
            },
            max: {
              value: 2100,
              message: "year must be lesser than 2100",
            },
            required: "year is required",
          })}
        />
        {errors.year && (
          <span className="text-red-400">{errors.year.message}</span>
        )}

        <label htmlFor="sequential" className="text-slate-50">
          Sequencial
        </label>
        <input
          type="number"
          className={`rounded-lg p-2 w-full ${
            errors.year && "outline outline-2 outline-red-400"
          }`}
          id="sequential"
          placeholder={`${movie.sequential}`}
          {...register("sequential", {
            min: {
              value: 1,
              message: "sequential must be greater than 1",
            },
            required: "sequential is required",
          })}
        />
        {errors.sequential && (
          <span className="text-red-400">{errors.sequential.message}</span>
        )}

        <input
          className="bg-cyan-500 hover:bg-cyan-900 hover:text-slate-50 w-full rounded-lg p-2 cursor-pointer mt-10"
          type="submit"
        />
      </form>
    </section>
  );
}

export default EditFilm;
