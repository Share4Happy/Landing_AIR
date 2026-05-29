import { dataForm } from "@/app/action.form";
import RegistrationForm from "./index";

export default async function Page({ params }) {
    const { id } = await params;
    const check = await dataForm(id);

    
    if (!check) return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16 }}>
            <div style={{ width: 125, height: 125, background: 'url(https://www.voca.vn/assets/images/library/library-workplace.svg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
            <p className="text_4_400">Không tìm thấy thông tin form.</p>
        </div>)
    return (
        <div style={{ background: '#f0f4f5', padding: '1rem' }}>
            <RegistrationForm id={check} />
        </div>

    )
};