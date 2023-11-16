import Skeleton from "react-loading-skeleton";

export default function ContactSkeleton() {
    return (
        <div className="chat-box">
            <div className="img-box">

                <Skeleton circle={true} height={45} />
            </div>
            <div className="chat-details">
                <div className="text-head">
                    <Skeleton height={20} width={100}/>
                </div>
                <div className="text-message">
                    <p><Skeleton height={12} width={200}/> </p>
                </div>
            </div>
        </div>
    )
}