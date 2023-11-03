document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.querySelector('.nav-dropdown-button');
    const dropdownContent = document.querySelector('.nav-dropdown-content');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
  
    // 클릭 이벤트 핸들러를 등록
    dropdownButton.addEventListener('click', function() {
      dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    });
  
    // 각 드롭다운 아이템에 클릭 이벤트 핸들러 등록
    dropdownItems.forEach(item => {
      item.addEventListener('click', function() {
        const selectedText = item.textContent;
        document.querySelector('.dropdown-display').textContent = selectedText;
  
        // 기존에 선택된 아이템의 스타일 초기화
        dropdownItems.forEach(otherItem => {
          otherItem.style.color = 'black';
        });
  
        // 클릭한 아이템의 스타일 변경
        item.style.color = 'blue';
  
        // 드롭다운 메뉴 닫기
        dropdownContent.style.display = 'none';
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const postCards = document.querySelectorAll('.post-card');
    const modalOverlay = document.querySelector('.modal-overlay');
    const closeModalButton = document.querySelector('.close-modal');
    const modal = document.querySelector('.modal');

    postCards.forEach((postCard) => {
        postCard.addEventListener('click', () => {
            modalOverlay.style.display = 'block';
        });
    });

    closeModalButton.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
    });
});