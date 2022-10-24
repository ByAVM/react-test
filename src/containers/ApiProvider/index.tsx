import { FC, PropsWithChildren, useEffect } from "react";
import { fetchGamesData, useTypedDispatch } from "../../App/store";

export const ApiProvider: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchGamesData());
  }, [dispatch]);

  return <>{children}</>;
};
