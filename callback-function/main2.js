let btn__follow = document.querySelector(".btn__follow");
let btn__tweet = document.querySelector(".btn__tweet");
let tweet_index = document.querySelector("#index");
let elm_input = document.querySelector("#tweet-content");
let maxTweetLength = 10;

btn__follow.addEventListener("click", function () {
  if (isFollowing()) {
    confirmed(unfollow);
  } else {
    follow();
  }
});

// btn__tweet.addEventListener("click", function () {
//   let elm_input = document.querySelector("#tweet-content");
//   let tweet_text = elm_input.value;
//   let tweet_status = checkTweet(tweet_text);

//   if (tweet_status.length && !tweet_status.blank) {
//     confirmed(postTweet, tweet_text);
//     clearForm(elm_input);
//   } else {
//     window.alert(`${maxTweetLength}文字以下で入力してください`);
//   }

//   if (tweet_status.blank) {
//     window.alert('入力してください');
//   }
// });
let tweet_text = elm_input.value;
let tweet_status = checkTweet(tweet_text);

btn__tweet.addEventListener("click", function(e) {
  // getVal(e);

  console.log(e);
  // if (tweet_status.length && !tweet_status.blank) {
  //   confirmed(postTweet, tweet_text);
  //   clearForm(elm_input);
  // } else {
  //   window.alert(`${maxTweetLength}文字以下で入力してください`);
  // }

  // if (tweet_status.blank) {
  //   window.alert("入力してください");
  // }
});

function getVal(elm) {
  return elm.value;
}


function isBlank(elm) {
  return elm.value = "" ? true : false;
}

function isLengthOver(text, maxLimit) {
  return text < maxLimit ? true : false;
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
  let elm_list = document.createElement("li");
  elm_list.classList.add("body");
  elm_list.innerHTML = `<p>${text}</p>`;
  tweet_index.aïppendChild(elm_list);
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


