export default function ContactUs() {
    return (
        <div>
            <h1>Contact Us</h1>
            <form>
                <input name="firstName" type="text" id="firstName" class="form-control" />
                <label for="firstName">First Name</label>
                <input name="lastName" type="text" id="lastName" class="form-control" />
                <label for="lastName">Last Name</label>
                <input name="emailAddress" type="text" id="emailAddress" class="form-control" />
                <label for="emailAddress">Email Address</label>
                <input name="message" type="text" id="message" class="form-control" />
                <label for="message">Message</label>
                <button type="submit" >Send</button>
                <button type='reset' >Clear</button>
            </form>
        </div>
    )
}