const sNames = ["SHAM", "AMAR", 'carly', 'james', 'lary', 'sins', 'fighter', 'angry', 'bird', 'sanjo', 'jd', 'dev', 'gamer', 'hot', 'vary', 'sadia', 'sad', 'master', 'buddy', 'not', 'prem', 'kirs', 'vasu', 'expert', 'child', 'ayal', 'jay', 123, 638, 8934, 2627, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 987, 786, 'clock', 'syed', 'lora', 'lap', 'iloa', 'ves', 'asia', 'living', 'laughing', 'cup', 'nice', 'silly', 'beutiful', 'wonder', 'if', 'pane', 'free', 'cat', 'pus', 'sy', 'real', 'dog', 'harry', 'fast', 'slem', 'hyter', 'populis', 'Adi', 'iam', 'possible', 'am-pm', 'stylish', 'mary', 'happy', 'friendly', 'mark', 'artifical', 'badal', 'black', 'lovely', 'officer', '-', '_', 'SHAM', 'AMAR','ruler', 'lucky', 'bulldog', 'iloveu', 'so', 'isend', 'uthis', 'wise', 'hand', 'some', 'power', 'full', 'aka', 'ft', 'vardan', 'techno', 'gamerz', 'anshu', 'bhist', 'carry', 'miniti', 'yes', 'smarty', 'pie', 'dream', 'helpfull', 'full', 'legend', 'laga', 'kismat', 'guy', 'gay', 'king', 'lion', 'tiger', 'brave', 'rober', 'pick', 'mr', 'dear', 'girl', 'THEBOYS', 'worry', 'after', 'fool', 'fan', 'lover', 'found', 'wunba', 'sadiAmar', 'come', 'late', 'pink'];

function generateUserName(number) {
    let userName = '';
    for (let i = 0; i < number; i++) {
        userName += sNames[(Math.floor(Math.random() * sNames.length))];
    }
    return userName;
}

function generateRandomString(length) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return result;
}

function generateCredentials() {
  const userName = generateUserName(Math.floor(Math.random() + 3));
  const password = generateRandomString(Math.floor(Math.random() * 24) + 8);
  document.getElementById('username').value = userName;
  document.getElementById('password').value = password + "ILvU";
}