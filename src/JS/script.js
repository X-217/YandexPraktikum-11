'use strict';

const cardContainer = document.querySelector(".places-list");
const userParams = {
    baseUrl: "http://95.216.175.5/cohort7",
    token: "e68c9d86-cb48-42e5-bf67-da81383a3bce",
};
const api = new API(userParams);
const imageViewPopup = new ImageViewPopup();
const card = new Card(imageViewPopup);
const cardList = new CardList(cardContainer, card);
const userInfo = new UserInfo(api);
const formValidator = new FormValidator();
const addPlacePopup = new AddPlacePopup(cardList, formValidator);
const editUserPopup = new EditUserPopup(userInfo, formValidator, api);

document.querySelector('.profile').addEventListener('click', mainPopupShow);

loadInitialData(api, userInfo, cardList);

function mainPopupShow(event) {
    if (event.target.closest(".user-info__edit-button")) {
        editUserPopup.open();
    } else if (event.target.closest(".user-info__button")) {
        addPlacePopup.open();
    }
}

function loadInitialData(api, userInfo, cardList) {
    api.getUserInfo().then((result) => {
        userInfo.setUserInfo(result.name, result.about, result.avatar);
        userInfo.showUserInfo();
    });
    api.getInitialCards().then((result) => {
        cardList.render(result);
    });
}

