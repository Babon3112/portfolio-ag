// import UserMoodel from "@/models/User.model";
import { sendMessage } from "@/helper/sendMesage";
// import dbConnect from "@/lib/dbConnect";

export async function POST(request: Request) {
  try {
    // await dbConnect();

    const { name, mobileNo, email, message } = await request.json();

    const emailResponse = await sendMessage(name, mobileNo, email, message);
    if (!emailResponse.success) {
      return Response.json(
        {
          success: false,
          message: emailResponse.message,
        },
        { status: 500 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Message sent successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Error when sending message",
      },
      { status: 500 }
    );
  }
}
