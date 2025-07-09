--Github
// Tạo một repository mới
git init
git add README.md

git commit -m "first commit"
git branch -m main

// Nếu chưa clone đến repository của bạn đến máy chủ remote, thực hiện
git remote add origin https://github.com/quocpp77/my-evn.git

// Đẩy (push) các thay đổi
git push origin main

// Tải xuống (pull = fetch + merge) dữ liệu từ remote repository và cập nhật Local repository phù hợp với dữ liệu đó
git pull origin main (hoặc git pull https://github.com/quocpp77/my-evn.git)

// Copy một Repo từ máy Remote về Local
git clone https://github.com/quocpp77/my-evn.git

// Thêm (add) & commit
git add <file/folder>
git add *
git commit -m "firt commit"
