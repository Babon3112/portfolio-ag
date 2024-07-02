import dbConnect from "@/lib/dbConnect";
import RatingModel from "@/model/model";

export async function POST(request: Request) {
  await dbConnect();
  try {
    const { rating } = await request.json();
    if (!rating) {
      return Response.json(
        {
          success: false,
          message: "Rating is required",
        },
        { status: 400 }
      );
    }

    if (rating < 1) {
      return Response.json(
        {
          success: false,
          message: "Rating should not be less than 1",
        },
        { status: 400 }
      );
    }

    if (rating > 5) {
      return Response.json(
        {
          success: false,
          message: "Rating should not be more than 5",
        },
        { status: 400 }
      );
    }

    let ratingData = await RatingModel.findOne({
      email: "arnabbabon2002@gmail.com",
    });

    if (!ratingData) {
      ratingData = new RatingModel({
        email: "arnabbabon2002@gmail.com",
      });
    }

    switch (rating) {
      case 1:
        ratingData.ratingCount1 += 1;
        break;
      case 2:
        ratingData.ratingCount2 += 1;
        break;
      case 3:
        ratingData.ratingCount3 += 1;
        break;
      case 4:
        ratingData.ratingCount4 += 1;
        break;
      case 5:
        ratingData.ratingCount5 += 1;
        break;
    }

    await ratingData.save();

    return Response.json(
      { success: true, message: "Rating updated successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      {
        success: false,
        message: "Error updating rating",
      },
      { status: 500 }
    );
  }
}
