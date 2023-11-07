import { WebSocketProvider } from "../_contexts/WebSocketContext";
import WebQrLayout from "../components/Layouts/WebQrLayout";

export default function Web() {
    return (
        <WebSocketProvider>
            <WebQrLayout />
        </WebSocketProvider>
    )
}
