import RestaurtantItem from "@/components/restaurants/RestaurantItem";
import getRestaurants from "./actions/getRestaurants";
import { ExtendedRestaurant } from "@/lib/db";
import { calculateRatings } from "@/lib/utils";
import Search from "@/components/navigation/Search";
import PaginationControls from "@/components/navigation/PaginationControls";

type HomePageProps = {
  searchParams: {
    name: string;
    page: string;
  };
};

const Home = async ({ searchParams }: HomePageProps) => {
  const name = searchParams.name;
  const page = parseInt(searchParams.page) || 1;
  const response = await getRestaurants(name, page);
  const restaurants = response.extendedRestaurant;
  const RESTAURANTS_PER_PAGE = 24;

  const hasPrev = RESTAURANTS_PER_PAGE * (page - 1) > 0;
  const hasNext =
    RESTAURANTS_PER_PAGE * (page - 1) + RESTAURANTS_PER_PAGE < response.count;
  const TOTAL_PAGES = Math.ceil(response.count / RESTAURANTS_PER_PAGE);
  if (restaurants?.length === 0) {
    return;
  }

  return (
    <>
      <div className="flex mb-10 justify-between items-center px-4 md:px-0">
        <Search />
      </div>
      {restaurants.length === 0 ? (
        <h1>No Restaurants found...</h1>
      ) : (
        <div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4
          gap-3 overflow-hidden px-4 md:px-0"
        >
          {restaurants.map((restaurant: ExtendedRestaurant) => {
            const averageRating = calculateRatings(restaurant.reviews);
            return (
              <div key={restaurant.id} className="col-span-1 md:col-span-1">
                <RestaurtantItem
                  data={restaurant}
                  reviewsCount={restaurant.reviews.length}
                  averageRating={averageRating}
                />
              </div>
            );
          })}
        </div>
      )}
      <div className="flex mt-10">
        <PaginationControls
          page={page}
          totalPages={TOTAL_PAGES}
          hasNext={hasNext}
          hasPrev={hasPrev}
        />
      </div>
    </>
  );
};

export default Home;
