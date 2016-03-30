using CarDealershipAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CarDealershipAPI.API
{
    public class MakesController : ApiController
    {
        private ApplicationDbContext _db = new ApplicationDbContext();

        // GET: api/CarMakes
        public IEnumerable<Make> Get()
        {
            return _db.Makes.ToList();
        }

    }
}
