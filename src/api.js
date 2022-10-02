/**
 * Main API
 * @returns
 */

/**
 * Products API
 * @returns
 */

const BASE_PATH = 'http://localhost:4000';

// Search
export async function getSearch() {
  return fetch(`${BASE_PATH}/search`).then((response) => response.json());
}

// Visual
export async function getVisual() {
  return fetch(`${BASE_PATH}/visual`).then((response) => response.json());
}

// 오늘본상품
export async function getTodayProduct() {
  return fetch(`${BASE_PATH}/todayProduct`).then((response) => response.json());
}

// 후기
export async function getReview() {
  return fetch(`${BASE_PATH}/reviews`).then((response) => response.json());
}

// LeaderBoard
export async function getLeaderBoard() {
  return fetch(`${BASE_PATH}/leaderBoard`).then((response) => response.json());
}

// 클래스 소개
export async function getClassIntro() {
  return fetch(`${BASE_PATH}/classIntro`).then((response) => response.json());
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
