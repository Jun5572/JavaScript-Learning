const btn__follow = document.querySelector('.btn__follow');
const btn__tweet = document.querySelector('.btn__tweet');
let tweetText = document.querySelector('#tweet-content');


btn__follow.addEventListener("click", function () {
  confirmed(followable);
});

btn__tweet.addEventListener("click", function () {
  confirmed(cancelTweet);
  isTweetable(tweetText);
});


function isTweetable(text) {
  console.log(text.value.length);
}

function followable() {
  if (btn__follow.classList.contains('following')) {
    //followingがあったら削除。InnerText変更。
    btn__follow.classList.remove("following");
    btn__follow.innerText = "フォローする";
    console.log("フォローを外しました");
  } else {
    //followingがなかったら追加。InnerText変更。
    btn__follow.classList.add('following');
    btn__follow.innerText = "フォロー中";
    console.log("フォローしました");
  }
}

function cancelTweet() {
  console.log("ツイートをキャンセルしました");
}

function confirmed(fn) {
  if (window.confirm("実行しますか？")) {
    fn();
  } else {
    alert("キャンセルしました");
  }
}
