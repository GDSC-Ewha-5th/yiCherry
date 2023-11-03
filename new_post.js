// 태그를 저장할 배열
let tagsArray = [];

// HTML 요소 가져오기
const tagInput = document.getElementById("tag-input");
const tagContainer = document.getElementById("tag-container");
const tagsDiv = document.getElementById("tags");

// 태그 추가 함수
function addTag(tagText) {
    // 중복된 태그 확인
    if (!tagsArray.includes(tagText)) {
        tagsArray.push(tagText);

        // 새로운 태그 엘리먼트 생성
        const tagElement = document.createElement("div");
        tagElement.classList.add("tag");
        tagElement.textContent = tagText;

        // 태그 클릭 시 삭제
        tagElement.addEventListener("click", () => {
            const index = tagsArray.indexOf(tagText);
            if (index !== -1) {
                tagsArray.splice(index, 1);
                tagElement.remove();
            }
        });

        // 태그 엘리먼트를 태그 목록에 추가
        tagsDiv.appendChild(tagElement);

        // 입력 필드 초기화
        tagInput.value = "";
    }
}

// 태그 입력 필드에서 Enter 키 입력 시 태그 추가
tagInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        addTag(tagInput.value);
    }
});