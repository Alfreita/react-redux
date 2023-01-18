import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../reduxConfig/hooks";
import { retrieveSwAsync, selectSw } from "./swSlice";

const ReactRedux = () => {
  const sw = useAppSelector(selectSw);
  const dispatch = useAppDispatch();

  const submit = async () => {
    dispatch(retrieveSwAsync(swPeopleNumber.toString()));
  };

  const swPeopleNumber = useMemo((): number => {
    return sw.value.length !== 0 ? sw.value.length + 1 : 1;
  }, [sw]);

  const swComponent = (name: string, hight: string): JSX.Element => {
    return (
      <div key={name}>
        <>
          <p>Name: </p>
          <p>{name}</p>
        </>
        <>
          <p>Height: </p>
          <p>{hight}</p>
        </>
      </div>
    );
  };

  const emptySwComponent = useMemo((): JSX.Element => {
    return sw.status === "loading" ? (
      <>Loading</>
    ) : (
      <>Click in retrive to get a person from Star Wars </>
    );
  }, [sw]);

  return (
    <>
      {sw.value.length && sw.status !== "loading"
        ? sw.value.map((sw) => swComponent(sw.name, sw.height))
        : emptySwComponent}
      <button onClick={submit}>Retrive</button>
    </>
  );
};

export { ReactRedux };
