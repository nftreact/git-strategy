import Image from 'next/image';
import FirstSection from '@/components/FirstSection';
import SecondSection from '@/components/SecondSection';

export default function Home() {
  return (
    <div style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p style={{ color: '#fff', fontSize: '30px' }}>git strategy</p>
      <FirstSection/>
      <SecondSection/>
    </div>
  );
}
