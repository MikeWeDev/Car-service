import './index.css'
import {useRef} from 'react'
import emailjs from "@emailjs/browser"
import { faAddressCard, faPhone} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
  faTelegram,
  faFacebook,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

function Contact() {
  const telegramUserName="@Mikyyetklyelij"
  const linkdinUserName='https://www.linkedin.com/in/mikyas-negash-01b400263'
  const phoneNumber='0902464535'
  const handleDial =()=>{
    window.location.href=`tel:${phoneNumber}`
  }
  const telegramLink=`https://t.me/${telegramUserName}`;


    const letters=[`S`,`A`,`Y `,`_`,`H`,`Y` ];
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
     

  
      emailjs
        .sendForm('service_uk7hzdl', 'template_0fnzi45', form.current, {
          publicKey: 're8UOJpBf_mKVPA23',
        })
        .then(
          () => {
            alert(`SUCCESSFULLY SENT!`);
            form.current.reset();
          },
          (error) => {
            alert('FAILED...', error.text);
          },
        );
    };
    return (
    <div className='containerC flex justify-between contact-page'>
         
        <div className="text-zone">
            <h1 className='h1'>
                {letters.map((i,index)=>{
             return  <span  key={index} className="father">{i}</span>
               })}
            </h1>
            <p>
         IF YOU WANT TO CONTACT US. 
         USE THE FOLOWING ADDRESESS
            </p>
           
            <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <ul>
               <li className="half">
                <input type="text"  className="text" name="from_name" id="sendername" placeholder="Name" />
               </li>
               <li className="half">
              <input type="text" className="text" name="from_email" id="replyto"  placeholder="Email"
              required />
               </li>
               <li>
               <textarea name="message" placeholder='Message'/>
      <input type="submit" value="Send"  className='flat '/>
               </li>
                   
            </ul>
          </form>
         
         
         
         
         
          <section className='additional'>
       
       
        <div className="call-us">
        <a href={`tel:${phoneNumber}`} className='phone' onClick={handleDial}>
      <FontAwesomeIcon className='anchor' icon={faPhone} color='#4d4d4e' /> <strong>PHONES<br></br>
      <span> +2519024635<br></br>+2519876543 </span> </strong>
          </a>                     
           <a  className='phone'>
      <FontAwesomeIcon className='anchor' icon={faAddressCard} color='#4d4d4e' /> <strong>ADDRESS<br></br>
      <span>CHURCHIL SRT 234 ,UI LI<br></br> BUILDING 2ND   </span></strong>
          </a> 
        </div>
      
      
    
      
        <div className="social-link">
        <a href={telegramLink} className='social' >
      <FontAwesomeIcon className='linkt' icon={faTelegram} color='#' /> 
          </a>           
          <a href={linkdinUserName} className='social' >
      <FontAwesomeIcon className='linkf' icon={faFacebook} color='#' /> 
          </a>            
          <a href={linkdinUserName} className='social' >
      <FontAwesomeIcon className='linkv' icon={faWhatsapp} color='#' />
          </a> 
        </div>
        
          </section>
          </div>
        </div>
      
    </div>
  )
}

export default Contact
