"use client"
import { toast } from 'react-toastify';
import styles from "@/styles/loginPage.module.css";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
// import Container from '@/components/homepage/Container';
const loginPage = () => {
    // const [username,setUsername]=useState('');
    // const [password,setPassword]=useState('');
    const router=useRouter();
    const handleSubmit=async(e)=>{
        e.preventDefault();

    try {
        const res=await fetch('https://dummyjson.com/auth/login' ,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username:"emilys",
                password:"emilyspass"
            })
          });
          const data = await res.json();
          if (res.ok) {
            // Store the JWT token in localStorage
            localStorage.setItem('token', data.accessToken);
            toast.success("Login Successful");
            // Redirect to the product listing page after successful login
            router.push('/');
          } else {
            toast.error(data.message || 'Invalid email or password');
          }
    } catch (error) {
        console.log(error);
    }
    }
   
 
  return (
    <div className={`${styles.loginContainer} w-100`}>
      <div className="row flex-column-reverse flex-md-row">
        <div className={`col-md-4 ${styles.login_column}`}>
            <h2 className='text-center'>Login/Sign-in</h2>
           <form className={`${styles.loginForm} rounded shadow mt-3`} onSubmit={handleSubmit}>
            <div className={`${styles.inputDiv}`}>
            <label htmlFor="email">E-Mail</label>
            <input type="email" placeholder='enter email address' className='form-control' name='email' required/>
            </div>

            <div className="inputDiv">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='enter password' className='form-control' name='password' required/>
            </div>
            <button type='submit' className={`${styles.loginBtn} btn mt-3`}>Sign-in Now</button>
           </form>
        </div>
        <div className={`col-md-8 ${styles.image_col} d-flex justify-content-center`}>
            <div className={`w-75 border-none`}>
            <Image className={`w-100 ${styles.loginImage}`}fill src={'https://img.freepik.com/free-vector/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37328.jpg?t=st=1744179729~exp=1744183329~hmac=8d47568693b0c5c599baecd9755fbd65f2d0ea3561abb45eb2690069208fce52&w=740'}></Image></div>
      </div></div>
    </div>
  )
}

export default loginPage
