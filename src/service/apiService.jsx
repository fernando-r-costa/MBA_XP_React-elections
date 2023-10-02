import { read } from "./httpService";

export async function apiGetAllCities() {
  const allCities = await read("cities?_sort=name");
  return allCities;
}

export async function apiGetAllCandidates() {
  const allCandidates = await read("candidates?_sort=name");
  return allCandidates;
}

export async function apiGetAllElection(cityId) {
  const allElection = await read(`election?cityId=${cityId}&_sort=votes&_order=desc`);
  // fazer a requisição na cidade para não trafegar muitos dados e não precisa filtro
  return allElection;
}
