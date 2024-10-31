import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import email from './Assects/email.png'
import phone from './Assects/phone.png'
import Mobilestock from './components/Mobilestock';

function App() {
  return (
    <div className='overflow-hidden'>
      <div className='bg-[#388FCB] pb-10'>
        <div className='flex flex-row justify-between pt-[5px] pb-[10px] pl-[50px] pr-[50px] text-white text-[13px]'>
          <div className='flex flex-row gap-3'>
            <div className='flex flex-row items-center gap-1'><img src={email} alt='iii' className='w-[14px] h-[10px]' /><p>info@abc.com</p></div>
            <div className='flex flex-row items-center gap-1'><img src={phone} alt='iii' className='w-[14px] h-[15px]' /><p>+123 456 789</p></div>
          </div>
          <div className='flex flex-row gap-1'>
            <div className='border-r-2 border-solid border-[white] pr-2'>Privacy Policy</div>
            <div>Terms and Condition</div>
          </div>
        </div>
      </div>
      <div className='bg-[#96CBEA] pt-[15px] rounded-[30px] top-[35px] absolute p-14 w-full'></div>
      <div className='flex flex-col items-center absolute top-[48px] overflow-hidden rounded-[20px]'
        style={{
          background: 'linear-gradient(to bottom, #EEF9FF 30%, white 30% 100%)',
        }}
      >
        <Navbar />
        <HeroSection />
        <Mobilestock />
      </div>
    </div>
  );
}

export default App;
