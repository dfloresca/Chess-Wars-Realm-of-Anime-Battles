export default function ContactUs() {
    return (
        <div>
            <h1>Contact Us</h1>
            <form>
                <input name="firstName" type="text" id="firstName"/>
                <label for="firstName">First Name</label>
                <input name="lastName" type="text" id="lastName"/>
                <label for="lastName">Last Name</label>
                <input name="emailAddress" type="text" id="emailAddress"/>
                <label for="emailAddress">Email Address</label>
                <input name="message" type="text" id="message"/>
                <label for="message">Message</label>
                <button type="submit" >Send</button>
                <button type='reset' >Clear</button>
            </form>
        </div>
    )
}