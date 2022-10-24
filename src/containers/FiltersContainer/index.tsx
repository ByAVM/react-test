import { FC } from "react";
import {
  selectCurrencies,
  selectFilters,
  selectProviders,
  useTypedSelector,
  setCurrencyFilter,
  setProviderFilter,
  useTypedDispatch,
} from "../../App/store";
import { FiltersLayout } from "../../components/FiltersLayout";
import { Select } from "../../components/Select";

export const FiltersContainer: FC = () => {
  const currencies = useTypedSelector(selectCurrencies);
  const providers = useTypedSelector(selectProviders);
  const { currency, provider } = useTypedSelector(selectFilters);

  const dispatch = useTypedDispatch()

  return (
    <FiltersLayout>
      <Select
        items={currencies}
        value={currency}
        onChange={(value) => dispatch(setCurrencyFilter(value))}
        placeholder="Валюта"
      />
      <Select
        items={providers}
        value={provider}
        onChange={(value) => dispatch(setProviderFilter(value))}
        placeholder="Провайдер"
      />
    </FiltersLayout>
  );
};
