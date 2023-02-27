import { AddPost } from "../../../api/post";
import {router, useEffect, useState } from "../../../lib";




const AddProjectPost = () => {
    const [data, setData] = useState([]);
    // kiểm tra localStorage có dữ liệu không?
    // nếu có thì lấy dữ liệu
    // ngược lại thì gán mảng rỗng

    useEffect(() => {
        const form = document.getElementById("form-add");
        const exampleInputTitle = document.getElementById("exampleInputTitle");
        const exampleInputImage = document.getElementById("exampleInputImage");
        const exampleInputAuthor = document.getElementById("exampleInputAuthor");
        const exampleInputContent = document.getElementById("exampleInputContent");
        const exampleInputYear = document.getElementById("exampleInputYear");
        const exampleInputSatis = document.getElementById("exampleInputSatis");
        const exampleInputWork = document.getElementById("exampleInputWork");
        const exampleInputAwards = document.getElementById("exampleInputAwards");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            // tạo ra 1 object mới lấy dữ liệu từ form
            const formData = {
               
                title: exampleInputTitle.value,
                content: exampleInputContent.value,
                image: exampleInputImage.value,
                author:exampleInputAuthor.value ,
                years_of_experience:exampleInputYear.value,
                satisfied_clients:exampleInputSatis.value,
                working_hours:exampleInputWork.value,
                awards_won:exampleInputAwards.value
            };
            // call api va tham phan tu
            // GET, POST, PUT, DELETE
            AddPost(formData)
                .then((data) => setData(data))
                .then(() => {
                    router.navigate("/admin/posts/projectpost")
                });
        
            // chuyển hướng về trang quản lý dự án

        });
    });
  return `
  <!-- Favicon -->
  <link href="/../../assetsadmin/img/favicon.ico" rel="icon">

  <!-- Google Web Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="/../../https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Icon Font Stylesheet -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

  <!-- Libraries Stylesheet -->
  <link href="/../../assetsadmin/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="/../../assetsadmin/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

  <!-- Customized Bootstrap Stylesheet -->
  <link href="/../../assetsadmin/css/bootstrap.min.css" rel="stylesheet">

  <!-- Template Stylesheet -->
  <link href="/../../assetsadmin/css/style.css" rel="stylesheet">









  <div class="container-xxl position-relative bg-white d-flex p-0">
  <!-- Spinner Start -->
 
  <!-- Spinner End -->


  <!-- Sidebar Start -->
  <div class="sidebar pe-4 pb-3">
      <nav class="navbar bg-light navbar-light">
          <a href="index.html" class="navbar-brand mx-4 mb-3">
              <h3 class="text-primary"><i class="fa fa-hashtag me-2"></i>DASHMIN</h3>
          </a>
          <div class="d-flex align-items-center ms-4 mb-4">
              <div class="position-relative">
                  <img class="rounded-circle" src="/../../assetsadmin/img/user.jpg" alt="" style="width: 40px; height: 40px;">
                  <div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
              </div>
              <div class="ms-3">
                  <h6 class="mb-0">Jhon Doe</h6>
                  <span>Admin</span>
              </div>
          </div>
          <div class="navbar-nav w-100">
              <a href="../index.html" class="nav-item nav-link active"><i class="fa fa-tachometer-alt me-2"></i>Dashboard</a>
              <div class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="far fa-file-alt me-2"></i>Posts</a>
                  <div class="dropdown-menu bg-transparent border-0">
                      <a href="add_element/add_posts.html" class="dropdown-item">New Post</a>
                      <a href="list_element/list_post.html" class="dropdown-item">Add Posts</a>
                  </div>
              </div>
              <div class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="far fa-file-alt me-2"></i>Services</a>
                  <div class="dropdown-menu bg-transparent border-0">
                      <a href="add_element/add_services.html" class="dropdown-item">New Services</a>
                      <a href="list_element/list_service.html" class="dropdown-item">Add Servicess</a>
                  </div>
              </div>
              <div class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="far fa-file-alt me-2"></i>Menu</a>
                  <div class="dropdown-menu bg-transparent border-0">
                      <a href="add_element/add_menu.html" class="dropdown-item">New Menu</a>
                      <a href="list_element/list_menu.html" class="dropdown-item">Add Menus</a>
                  </div>
              </div>
              <div class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="far fa-file-alt me-2"></i>Profile</a>
                  <div class="dropdown-menu bg-transparent border-0">
                      <a href="add_element/add_profile.html" class="dropdown-item">New Profile</a>
                      <a href="list_element/list_profile.html" class="dropdown-item">Add Profiles</a>
                  </div>
              </div>
              <div class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="far fa-file-alt me-2"></i>Portfolio</a>
                  <div class="dropdown-menu bg-transparent border-0">
                      <a href="add_element/add_portfolio.html" class="dropdown-item">New Portfolio</a>
                      <a href="list_element/list_portfolio.html" class="dropdown-item">Add Portfolios</a>
                  </div>
              </div>
              <div class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="far fa-file-alt me-2"></i>Contact</a>
                  <div class="dropdown-menu bg-transparent border-0">
                      <a href="add_element/add_contact.html" class="dropdown-item">New Contact</a>
                      <a href="list_element/list_contact.html" class="dropdown-item">Add Contacts</a>
                  </div>
              </div>
          </div>
      </nav>
  </div>
  <!-- Sidebar End -->


  <!-- Content Start -->
  <div class="content">
      <!-- Navbar Start -->
      <nav class="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
          <a href="../index.html" class="navbar-brand d-flex d-lg-none me-4">
              <h2 class="text-primary mb-0"><i class="fa fa-hashtag"></i></h2>
          </a>
          <a href="#" class="sidebar-toggler flex-shrink-0">
              <i class="fa fa-bars"></i>
          </a>
          <form class="d-none d-md-flex ms-4">
              <input class="form-control border-0" type="search" placeholder="Search">
          </form>
          <div class="navbar-nav align-items-center ms-auto">
              <div class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                      <i class="fa fa-envelope me-lg-2"></i>
                      <span class="d-none d-lg-inline-flex">Message</span>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                      <a href="#" class="dropdown-item">
                          <div class="d-flex align-items-center">
                              <img class="rounded-circle" src="/../../assetsadmin/img/user.jpg" alt="" style="width: 40px; height: 40px;">
                              <div class="ms-2">
                                  <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                  <small>15 minutes ago</small>
                              </div>
                          </div>
                      </a>
                      <hr class="dropdown-divider">
                      <a href="#" class="dropdown-item">
                          <div class="d-flex align-items-center">
                              <img class="rounded-circle" src="/../../assetsadmin/img/user.jpg" alt="" style="width: 40px; height: 40px;">
                              <div class="ms-2">
                                  <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                  <small>15 minutes ago</small>
                              </div>
                          </div>
                      </a>
                      <hr class="dropdown-divider">
                      <a href="#" class="dropdown-item">
                          <div class="d-flex align-items-center">
                              <img class="rounded-circle" src="/../../assetsadmin/img/user.jpg" alt="" style="width: 40px; height: 40px;">
                              <div class="ms-2">
                                  <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                  <small>15 minutes ago</small>
                              </div>
                          </div>
                      </a>
                      <hr class="dropdown-divider">
                      <a href="#" class="dropdown-item text-center">See all message</a>
                  </div>
              </div>
              <div class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                      <i class="fa fa-bell me-lg-2"></i>
                      <span class="d-none d-lg-inline-flex">Notificatin</span>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                      <a href="#" class="dropdown-item">
                          <h6 class="fw-normal mb-0">Profile updated</h6>
                          <small>15 minutes ago</small>
                      </a>
                      <hr class="dropdown-divider">
                      <a href="#" class="dropdown-item">
                          <h6 class="fw-normal mb-0">New user added</h6>
                          <small>15 minutes ago</small>
                      </a>
                      <hr class="dropdown-divider">
                      <a href="#" class="dropdown-item">
                          <h6 class="fw-normal mb-0">Password changed</h6>
                          <small>15 minutes ago</small>
                      </a>
                      <hr class="dropdown-divider">
                      <a href="#" class="dropdown-item text-center">See all notifications</a>
                  </div>
              </div>
              <div class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                      <img class="rounded-circle me-lg-2" src="/../../assetsadmin/img/user.jpg" alt="" style="width: 40px; height: 40px;">
                      <span class="d-none d-lg-inline-flex">John Doe</span>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                      <a href="#" class="dropdown-item">My Profile</a>
                      <a href="#" class="dropdown-item">Settings</a>
                      <a href="#" class="dropdown-item">Log Out</a>
                  </div>
              </div>
          </div>
      </nav>
      <!-- Navbar End -->


      <!-- Sale & Revenue Start -->
   
      <!-- Sale & Revenue End -->


      <!-- Sales Chart Start -->
     
      <!-- Sales Chart End -->


      <!-- Recent Sales Start -->
 
      <!-- Recent Sales End -->


      <!-- Widgets Start -->
      <div class="container-fluid pt-4 px-4">
          <div class="col-sm-12 col-xl-12">
              <div class="bg-light rounded h-100 p-4">
                  <h6 class="mb-4">Basic Form</h6>
                  <form id="form-add">
                      <div class="mb-3">
                          <label for="exampleInputTitle" class="form-label">Title</label>
                          <input type="text" class="form-control" id="exampleInputTitle"
                              aria-describedby="emailHelp">
                      </div>
                      <div class="mb-3">
                          <label for="exampleInputImage" class="form-label">Image</label>
                          <input type="file" class="form-control" id="exampleInputImage">
                      </div>
                      <div class="mb-3">
                          <label for="exampleInputContent" class="form-label">Content</label>
                          <input type="text" class="form-control" id="exampleInputContent">
                      </div>
                      <div class="mb-3">
                          <label for="exampleInputAuthor" class="form-label">Author</label>
                          <input type="text" class="form-control" id="exampleInputAuthor">
                      </div>
                      <div class="mb-3">
                          <label for="exampleInputYear" class="form-label">Years of experience</label>
                          <input type="number" class="form-control" id="exampleInputYear">
                      </div>
                      <div class="mb-3">
                          <label for="exampleInputSatis" class="form-label">Satisfied clients</label>
                          <input type="number" class="form-control" id="exampleInputSatis">
                      </div>
                      <div class="mb-3">
                          <label for="exampleInputWork" class="form-label">Working hours</label>
                          <input type="number" class="form-control" id="exampleInputWork">
                      </div>
                      <div class="mb-3">
                          <label for="exampleInputAwards" class="form-label">Awards won</label>
                          <input type="number" class="form-control" id="exampleInputAwards">
                      </div>
                    
                      <button type="submit" class="btn btn-primary">Sign in</button>
                  </form>
              </div>
          </div>
      </div>
      <!-- Widgets End -->


      <!-- Footer Start -->
      <div class="container-fluid pt-4 px-4">
          <div class="bg-light rounded-top p-4">
              <div class="row">
                  <div class="col-12 col-sm-6 text-center text-sm-start">
                      &copy; <a href="#">Your Site Name</a>, All Right Reserved. 
                  </div>
                  <div class="col-12 col-sm-6 text-center text-sm-end">
                      <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                      Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                  </br>
                  Distributed By <a class="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a>
                  </div>
              </div>
          </div>
      </div>
      <!-- Footer End -->
  </div>
  <!-- Content End -->



</div>




  `;
}

export default AddProjectPost