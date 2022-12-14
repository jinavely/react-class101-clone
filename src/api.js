/**
 * Main API
 * @returns
 */

/**
 * Products API
 * @returns
 */

const PORT = process.env.REACT_APP_PORT || '4000';
const BASE_PATH = `${process.env.REACT_APP_API_URL}:${PORT}`;
const BASE_SEARCH = process.env.BASE_SEARCH;
const API_KEY = process.env.API_KEY;
const LANGUAGE = process.env.LANGUAGE;

// Search
export async function getPopSearch() {
  return fetch(
    `${BASE_SEARCH}/movie/popular?api_key=${API_KEY}&language=${LANGUAGE}`,
  ).then((response) => response.json());
}
export async function getSearch({ keyword }) {
  return fetch(
    `${BASE_SEARCH}/search/movie?api_key=${API_KEY}&language=${LANGUAGE}&query=${keyword}`,
  ).then((response) => response.json());
}

// Visual
export async function getVisual() {
  return fetch(`${BASE_PATH}/visual`).then((response) => response.json());
}

// 오늘본상품
export async function getTodayProduct() {
  return fetch(`${BASE_PATH}/today-product`).then((response) =>
    response.json(),
  );
}

// 후기
export async function getReview() {
  return fetch(`${BASE_PATH}/reviews`).then((response) => response.json());
}

// LeaderBoard
export async function getLeaderBoard() {
  return fetch(`${BASE_PATH}/leader-board`).then((response) => response.json());
}

// 클래스 소개
export async function getClassIntro() {
  return fetch(`${BASE_PATH}/class-intro`).then((response) => response.json());
}

// 크리에이터
export async function getCreator() {
  return fetch(`${BASE_PATH}/creator`).then((response) => response.json());
}

// 커리큘럼
export async function getCurriculum() {
  return fetch(`${BASE_PATH}/curriculum`).then((response) => response.json());
}

// Aside
export async function getAside() {
  return fetch(`${BASE_PATH}/aside`).then((response) => response.json());
}

// 커뮤니티
export async function getCommunity() {
  return fetch(`${BASE_PATH}/community`).then((response) => response.json());
}
