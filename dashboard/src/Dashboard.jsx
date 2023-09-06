import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import * as React from 'react';
import Button from '@mui/material/Button';
import Images from './components/Images';
import { Link } from 'react-router-dom';
import LinkIcon from '@mui/icons-material/Link';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
export default function Dashboard() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <h4 className='my-3 '>(FREE) Food Delivery Admin Dashboard</h4>
          </div>
          <div className="col-md-3 my-3 ">
            <BookmarkBorderOutlinedIcon />
            <Button direction="row" variant="contained">Open in figma</Button>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-dark p-5">
          <Images />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <p className='my-5 '>Free design resource of our latest exploration for a food delivery admin dashboard. You can use this free resource for your personal or commercial project.</p>
            <p>
              Follow us:
              <ul>
                <li >Instagram: <Link className='text-secondary text-decoration-none' to="www.instagram.com">@Peterdraw.co</Link> </li>
                <li >Website: <Link className='text-secondary text-decoration-none' to="/home">Peterdraw.co</Link></li>
              </ul>
            </p>
            <p>We hope you like it! Thank you.</p>
            <hr />
            <h6>Remixes</h6>
            <p className='text-end'>See all</p>
            <div className="container">
              <img width="30%" src="https://colorlib.com/wp/wp-content/uploads/sites/2/free-dashboard-templates-1.jpg" className="img-thumbnail " alt="Responsive image"></img>
              <img width="30%" src="https://colorlib.com/wp/wp-content/uploads/sites/2/free-dashboard-templates-1.jpg" className="img-thumbnail" alt="Responsive image"></img>
              <p>Free food delivery admin dashboard...</p>
            </div>
            <hr />
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Add a comment" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <span class="input-group-text bg-secondary" id="basic-addon2"><button type="button" class="btn btn-secondary">post</button>
              </span>
            </div>
          </div>
          <div className="col-md-4 my-5">
            <p className=''>
              This is a Figma Community file. Community is a space for Figma users to share things they create. Get started with a free account →
            </p>
            <h6>Tags</h6>
            <div className="butn">
              <button type="button" class="btn btn-light m-2"><Link className='text-secondary text-decoration-none' to="/admin">Admin</Link></button>
              <button type="button" class="btn btn-light m-2"><Link className='text-secondary text-decoration-none' to="/AdminDashboard">Admin Dashboard</Link></button>
              <button type="button" class="btn btn-light m-2"><Link className='text-secondary text-decoration-none' to="/Adminpanel">Admin panel</Link></button>
              <button type="button" class="btn btn-light m-2"><Link className='text-secondary text-decoration-none' to="AdminUI">Admin UI</Link></button>
              <button type="button" class="btn btn-light m-2"><Link className='text-secondary text-decoration-none' to="/Dashboard">Dashboard</Link></button>
              <button type="button" class="btn btn-light m-2"><Link className='text-secondary text-decoration-none' to="/DashboardUi">Dashboard Ui</Link></button>
              <button type="button" class="btn btn-light m-2"><Link className='text-secondary text-decoration-none' to="/FoodAdmin">Food Admin</Link></button>
              <button type="button" class="btn btn-light m-2"><Link className='text-secondary text-decoration-none' to="/Fooddelivery">Food delivery</Link></button>
              <button type="button" class="btn btn-light m-2"><Link className='text-secondary text-decoration-none' to="/Freebie">Freebie</Link></button>
              <button type="button" class="btn btn-light m-2"><Link className='text-secondary text-decoration-none' to="/FreeDesign">Free Design</Link></button>
              <button type="button" class="btn btn-light m-2"><Link className='text-secondary text-decoration-none' to="/Freetemplate">Free template</Link></button>
              <button type="button" class="btn btn-light m-2"><Link className='text-secondary text-decoration-none' to="UIUXdesign">UI UX design</Link></button>

            </div>
            <h6 className='my-4'>Share</h6>
            <div className=''>
              <span><LinkIcon /></span>
              <span><TwitterIcon /></span>
              <span><FacebookIcon /></span>
            </div>
            <br />
            <hr />
            <br />
            <h6>For Figma</h6>
            <br />
            <hr />
            <br />
            <p>
              Last updated 6 months ago
            </p>
            <p>Support: Ameerdocotr50@gmail.com</p>
            <p>report resourses</p>
          </div>
        </div>
      </div>


    </div>
  )
}
