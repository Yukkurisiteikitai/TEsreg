'use strict';

const answers = [
    "###userName###のいいところは声です。###userName###の特徴的な声は皆を惹きつけ、心に残ります。",
    "###userName###のいいところはまなざしです。###userName###に見つめられた人は、気になって仕方がないでしょう。",
    "###userName###のいいところは情熱です。###userName###の情熱に周りの人は感化されます。",
    "###userName###のいいところは厳しさです。###userName###の厳しさがものごとをいつも成功に導きます。",
    "###userName###のいいところは知識です。博識な###userName###を多くの人が頼りにしています。",
    "###userName###のいいところはユニークさです。###userName###だけのその特徴が皆を楽しくさせます。",
    "###userName###のいいところは用心深さです。###userName###の洞察に、多くの人が助けられます。",
    "###userName###のいいところは見た目です。内側から溢れ出る###userName###の良さに皆が気を惹かれます。",
    "###userName###のいいところは決断力です。###userName###がする決断にいつも助けられる人がいます。",
    "###userName###のいいところは思いやりです。###userName###に気をかけてもらった多くの人が感謝しています。",
    "###userName###のいいところは感受性です。###userName###が感じたことに皆が共感し、わかりあうことができます。",
    "###userName###のいいところは節度です。強引すぎない###userName###の考えに皆が感謝しています。",
    "###userName###のいいところは好奇心です。新しいことに向かっていく###userName###の心構えが多くの人に魅力的に映ります。",
    "###userName###のいいところは気配りです。###userName###の配慮が多くの人を救っています。",
    "###userName###のいいところはその全てです。ありのままの###userName###自身がいいところなのです。",
    "###userName###のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる###userName###が皆から評価されています。"
];
//IDs
const userNameInput = document.getElementById('userName');
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');
const tweetDivision = document.getElementById('tweet-area');



userNameInput.addEventListener(
    'keydown',
    (event) => {
      if(event.code === 'Enter') {
        // TODO Enter が押されたときに実行する処理
        PrintCheaker();
      }
    }
);

//function()の無名関数 は ()=> に省略できる.
assessmentButton.addEventListener('click',()=>{
    
    //診断結果発表area Make
    //resultDivision.innerHTML = '';//reset.
    /*こんな書き方もある
    while(resultDivision.firstChild){
        resultDivision.remove(resultDivision.firstChild);
    }*/
/*
    const userName = userNameInput.value;
    if(userName.length === 0){
        return;
    }
    console.log(userName);

    const header = document.createElement('h3');
    header.innerHTML = '診断結果';
    resultDivision.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assestment(userName);
    paragraph.innerHTML = result;
    resultDivision.appendChild(paragraph);


    //tweet area make
    tweetDivision.innerHTML='';


    const anchor = document.createElement('a');
    const hrefValue='https://twitter.com/intent/tweet?button_hashtag=あなたのいいところ&ref_src=twsrc%5Etfw';
    anchor.setAttribute('href',hrefValue);
    anchor.setAttribute('class','twitter-hashtag-button');
    anchor.setAttribute('data-text',result);
    anchor.innerHTML = 'Tweet #あなたのいいところ';
    tweetDivision.appendChild(anchor);
    */
   PrintCheaker();
})
    


function PrintCheaker(){
    //診断結果発表area Make
    resultDivision.innerHTML = '';//reset.
    /*こんな書き方もある
    while(resultDivision.firstChild){
        resultDivision.remove(resultDivision.firstChild);
    }*/

    const userName = userNameInput.value;
    if(userName.length === 0){
        return;
    }
    console.log(userName);

    const header = document.createElement('h3');
    header.innerHTML = '診断結果';
    resultDivision.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assestment(userName);
    paragraph.innerHTML = result;
    resultDivision.appendChild(paragraph);


    //tweet area make
    tweetDivision.innerHTML='';


    const anchor = document.createElement('a');
    const hrefValue='https://twitter.com/intent/tweet?button_hashtag=あなたのいいところ&ref_src=twsrc%5Etfw';
    anchor.setAttribute('href',hrefValue);
    anchor.setAttribute('class','twitter-hashtag-button');
    anchor.setAttribute('data-text',result);
    anchor.innerHTML = 'Tweet #あなたのいいところ';
    tweetDivision.appendChild(anchor);

    //Input Add
    const kind = document.createdElement('p');
    kind = 'Kind is no shield';
    tweetDivision.appendChild(kind);
}

//startLineCheack
for(var i=0;i<answers.length;i++){
    console.log(answers[i].replaceAll('###userName###', 'Te'+i+'eT'));
    

}

/**jjio
 * @param {string}userName ユーザーの名前
 * @returns {string} 診断結果
*/
function assestment(userName){
    //TODO診断処理を実装する
    //return '';

    let sumOfCharCode = 0;
    for (let i=0;i<userName.length;i++){
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }
    const index = sumOfCharCode % answers.length;
    let returns = answers[index];
    console.log("Tester(/^_^/)index:"+index)
    console.log("Tester(/^_^/)sumOfCharCode:"+sumOfCharCode)
    return returns.replaceAll('###userName###', userName);
}/*
function test(){
    console.log('診断結果の文章のテスト')

    //太郎
  console.log('太郎');
  console.assert(assessment('太郎') ==='太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。','診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。');

  //次郎
  console.log('次郎');
  console.assert(assessment('次郎') ==='次郎のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる次郎が皆から評価されています。','診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。');

  //花子
  console.log('花子');
  console.assert(assessment('花子') ==='花子のいいところはまなざしです。花子に見つめられた人は、気になって仕方がないでしょう。','診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。');


    console.log('====テスト終了=====')

}*/
//console.log(assestment('逆木美鍵'));
