ng add @angular/material
npm install ngx-toastr 		--save
npm install @angular/flex-layout --save
npm install @angular/cdk 	--save
npm install lodash		--save 
npm install @types/lodash 	--save
//npm i highcharts-angular 	--save
//npm i highcharts 		--save 
ng g environments

--Guard
ng g guard guard/auth

--Module
ng g m modules/materials --flat
ng g m modules/home --flat

--Component
ng g c home
ng g c home/login
ng g c page-not-found --skipTests=true

--Services
ng g s services/auth
ng g s services/shared-global 		--skip-tests=true --flat
ng g s services/notification 		--skip-tests=true --flat
ng g s services/hrm/hrm-employee   	--skip-tests=true --flat

--Models
ng generate class models/hrm-employee   --type=model

--Error
error TS2531: Object is possibly 'null'

// GITHUB
-- Tạo một repository mới
git init
git add README.md

git commit -m "first commit"
git branch -m main

-- Nếu chưa clone đến repository của bạn đến máy chủ remote, thực hiện
git remote add origin https://github.com/quocpp77/my-evn.git

-- Đẩy (push) các thay đổi
git push origin main

-- Tải xuống (pull = fetch + merge) dữ liệu từ remote repository và cập nhật Local repository phù hợp với dữ liệu đó
git pull origin main (hoặc git pull https://github.com/quocpp77/my-evn.git)

-- Copy một Repo từ máy Remote về Local
git clone https://github.com/quocpp77/my-evn.git

-- Thêm (add) & commit
git add <file/folder>
git add *
git commit -m "firt commit"
