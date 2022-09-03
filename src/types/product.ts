export interface Product {
  id: string;
  type: string; // 상품 타입 - 예금, 적금, 대출
  name: string; // 상품 이름
  keyword: string; // 상품 키워드 - 나이/직업
  content: string; // 상품 설명
}
