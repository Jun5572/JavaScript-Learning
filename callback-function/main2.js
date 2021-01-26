let btn__follow = document.querySelector(".btn__follow");
let btn__tweet = document.querySelector(".btn__tweet");
let tweet_index = document.querySelector("#index");
let elm_input = document.querySelector("#tweet-content");
let maxTweetLength = 10;
const overLengthText = `${maxTweetLength}文字以下で入力してください`;
const blankText = '入力してください';

btn__follow.addEventListener("click", function () {
  if (isFollowing() ? confirmed(unfollow) : follow());
});

btn__tweet.addEventListener("click", function () {
  let tweet_text = getVal(elm_input);
  let tweet_status = checkTweet(tweet_text);

  if (tweet_status.length && !tweet_status.blank) {
    confirmed(postTweet, tweet_text);
    clearForm(elm_input);
  } else {
    appendAlert(overLengthText);
  }

  if (tweet_status.blank) {
  }
});


function isBlank(elm) {
  return elm.value = "" ? true : false;
}

function isLengthOver(text, maxLimit) {
  return text < maxLimit ? true : false;
}

function appendAlert(text) {
  window.alert(text);
}

//tweet可能か判定する関数
function checkTweet(text) {
  let tweetLength = text.length;
  let result = {
   length: tweetLength < maxTweetLength ? true : false,
   blank: tweetLength === 0 ? true : false
  }
  return result;
}

function postTweet(text) {
  let elm_li = document.createElement('li');
  let elm_span = document.createElement('span');
  let elm_p = document.createElement('p');
  elm_li.classList.add("body");
  elm_p.innerText = text;
  tweet_index.appendChild(elm_li);
  elm_li.appendChild(elm_p);
  // elm_li.appendChild(elm_span);
}

//フォローしているかをチェックする関数。今回はクラスを持っているかで判定。
//本来はデータベースにレコードが存在しているかを確認して判定？
//戻り値：Boolean
function isFollowing() {
  let result = checkClass(btn__follow, "following");
  return result;
}

function follow() {
  btn__follow.classList.add("following");
  btn__follow.innerText = "フォロー中";
  console.log("フォローしました");
}

function unfollow() {
  btn__follow.classList.remove("following");
  btn__follow.innerText = "フォローする";
  console.log("フォローを外しました");
}

//実行前に確認をユーザーに対して行う関数
function confirmed(fn, arg) {
  if (window.confirm("実行しますか？")) {
    fn(arg);
  } else {
    alert("キャンセルしました");
  }
}


//引数に指定したクラスを持っているかの判定を行う関数
//戻り値 Boolean
function checkClass(element, strClassName) {
  return element.classList.contains(strClassName);
}

function clearForm(elm) {
  elm.value = "";
}

function getVal(elm) {
  return elm.value;
}
