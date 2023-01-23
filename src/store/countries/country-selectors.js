export const selectCountryInfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  qty: state.countries.countryList.length,
});

export const selectAllCountries = (state) => state.countries.countryList;

export const selectVisibleCountries = (state, { search = '', region = '' }) => {
  return state.countries.countryList.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) &&
      country.region.includes(region)
  );
};
