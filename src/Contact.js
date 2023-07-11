import styled from "styled-components";

export default function Contact(){
  return <Wrapper>
    <h2>You can reach us at</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7544.7465830656965!2d72.83774901034371!3d19.00326572253583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ceebf9b85051%3A0x9b2aec737f1a7ce!2sOne%20Indiabulls%20Centre!5e0!3m2!1sen!2sin!4v1677341667505!5m2!1sen!2sin" width="80%" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xrgvqnbd" method="POST" className="contact-inputs">
          <input type="text" placeholder="username" name="username" required autoComplete="off" />
          <input type="email" placeholder="email" required autoComplete="off" />
          <textarea name="message" id="" cols="30" rows="10" placeholder="Enter your message" required autoComplete="off"></textarea>
          <input type="submit" value="SEND"/>
        </form>
      </div>
    </div>
  </Wrapper>;  
};
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
    h2{
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: 1rem;
    }
    .container {
      margin-top: 6rem;

      .contact-form {
        width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}){
      .contact-form{
        max-width: 40rem;
      }
    }
  `;

 



