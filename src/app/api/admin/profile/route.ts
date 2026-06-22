import { adminVerification } from "@/hooks/useAuth";

export async function POST() {
    
    await adminVerification();
    
}