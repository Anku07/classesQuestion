/*Design a Twitter class. Your class must:
Private password: A private password string. Since this is private, you can name it whatever you want
as long as it's private!).
Private tweets array: A private tweets array. Again, feel free to name this whatever you want 
(I should not have access to it!)
Constructor(user, pass): A constructor that takes two arguments - a user and a pass(word) - and sets the 
publicly visible field this.user to the incoming user argument.
Constructor sets password: It should also set the value of the private password field. Feel free to pass 
this through an encryption method if you're feeling extra fancy.
checkPassword() Method: This method has one parameter - a string - and checks that parameter against the 
stored, private password, returning a boolean that basically says whether your supplied string matches the 
stored password.
"blanked" password setter and getter: Attempting to read classInstance.password should just return four 
asterisks (****). Attempting to set the password (e.g., classInstance.password = "myNewPassword") should 
do nothing. That is, setting the password to a new value should not affect what "works" in the above password 
checker.
tweet setter: This accepts a string and pushes the stringinto the private tweets array.
tweet getter: Returns a copy of the array of tweets.
tweetArray.pop() doesn't work: Running .pop() on your tweets array shouldn't 'work'. That is, if I have 
5 tweets, run .pop(), and then get the length of my tweets array, it should still read 5.
*/
class Twitter {
    #password
    #privateTweet = []
    constructor(user, password) {
        this.user = user;
        this.#password = password
    }
    checkPassword(string) {
        if (this.#password == string) {
            return "stringPresent"
        }
        else {
            return "stringNotPresent"
        }

    }
    password() {
        return `******`
    }
    setTweet(tweet) {
        return this.#privateTweet.push(tweet)
    }
    getTweets() {
        return this.#privateTweet
    }
}
let user1 = new Twitter("Ankita Singh", "Ankita@321")
let firstTweet = user1.setTweet("hi i am ankita")
let secondTweet = user1.setTweet("hello")
let info1 = user1.getTweets()
console.log(firstTweet)
console.log(secondTweet)
console.log(info1)
console.log(user1.password())
console.log(user1.checkPassword("Ankita.90"))