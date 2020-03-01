import "./index.css";
import API from "./JS/API.js";
import UserInfo from "./JS/UserInfo.js";
import FormValidator from "./JS/FormValidator.js";
import Card from "./JS/Card.js";
import CardList from"./JS/CardList.js";
import Popup from "./JS/Popup.js";
import AddPlacePopup from "./JS/AddPlacePopup.js";
import EditUserPopup from "./JS/EditUserPopup.js";
import ImageViewPopup from "./JS/ImageViewerPopup.js";

const cardContainer = document.querySelector(".places-list");
const serverUrl = NODE_ENV === 'development' ? 'http://praktikum.tk/cohort7' : 'https://praktikum.tk/cohort7';
const userParams = {
    baseUrl: serverUrl,
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
