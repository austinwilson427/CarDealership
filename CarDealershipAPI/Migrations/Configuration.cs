namespace CarDealershipAPI.Migrations
{
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<CarDealershipAPI.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(CarDealershipAPI.Models.ApplicationDbContext context)
        {
            // delete all
            context.Database.ExecuteSqlCommand("DELETE FROM Cars");
            //context.Database.ExecuteSqlCommand("DBCC CHECKIDENT ('Cars', RESEED, 0);");

            context.Database.ExecuteSqlCommand("DELETE FROM Makes");
            //context.Database.ExecuteSqlCommand("DBCC CHECKIDENT ('Makes', RESEED, 0);");


            // create models
            var bmw = new Make { Name = "BMW" };
            context.Makes.Add(bmw);
            var tesla = new Make { Name = "Tesla" };
            context.Makes.Add(tesla);
            var mini = new Make { Name = "MINI Cooper" };
            context.Makes.Add(mini);
            context.SaveChanges();


            // create cars
            var cars = new Car[]
            {
                    new Car
                    {
                        ShortDescription = "Green MINI Cooper S",
                        FullDescription = "This MINI Cooper S is great for the city.",
                        CarMakeId = mini.Id,
                        Price = 30000m,
                        ImageUrl = "https://netlogx.com/wp-content/uploads/2012/09/british-racing-green-mini-cooper-s-small1.jpg"
                    },
                    new Car
                    {
                        ShortDescription = "Orange MINI Cooper S",
                        FullDescription = "Orange is an odd color for a car.",
                        CarMakeId = mini.Id,
                        Price = 25000m,
                        ImageUrl = "https://s-media-cache-ak0.pinimg.com/736x/7d/d3/fc/7dd3fcdea71950a3d1c9c50b3522d488.jpg"
                    },
                     new Car
                    {
                        ShortDescription = "Black MINI Cooper Countryman",
                        FullDescription = "Holds more people than a normal MINI cooper and it is invisible at night.",
                        CarMakeId = mini.Id,
                        Price = 45000m,
                        ImageUrl = "http://www.moibbk.com/images/mini-cooper-countryman-black-2.jpg"
                    },
                     new Car
                    {
                        ShortDescription = "Tesla Model S",
                        FullDescription = "This red Tesla Model S has a 120 mile range.",
                        CarMakeId = tesla.Id,
                        Price = 130000m,
                        ImageUrl = "http://media.caranddriver.com/images/14q4/638369/2015-tesla-model-s-p85d-first-drive-review-car-and-driver-photo-648964-s-original.jpg"
                    },
                     new Car
                    {
                        ShortDescription = "Tesla Model X",
                        FullDescription = "A Tesla Mini Van with Falcon Doors.",
                        CarMakeId = tesla.Id,
                        Price = 150000m,
                        ImageUrl = "http://cdn.vrworld.com/wp-content/uploads/2015/09/tesla-model-x-concept-doors-open-rear-three-quarter.jpg"
                    },

            };

            context.Cars.AddOrUpdate(c => c.ShortDescription, cars);
        }
    }
}
