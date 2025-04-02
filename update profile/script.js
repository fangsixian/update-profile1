// 头像上传预览
document
  .getElementById("avatarUpload")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("profileAvatar").src = e.target.result;
        document.getElementById("profileAvatar").style.display = "block";
        document.getElementById("avatarPlaceholder").style.display = "none";

        // 更新左侧和顶部的头像
        document.querySelector(".logo-img").src = e.target.result;
        document.querySelector(".user-avatar img").src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

// 点击占位符触发文件选择
document
  .getElementById("avatarPlaceholder")
  .addEventListener("click", function () {
    document.getElementById("avatarUpload").click();
  });

// 显示修改用户名页面
function showChangeUsernamePage() {
  document.getElementById("profilePage").style.display = "none";
  document.getElementById("changeUsernamePage").style.display = "block";
  document.getElementById("changePasswordPage").style.display = "none";
  document.getElementById("readingHistoryPage").style.display = "none";
}

// 显示修改密码页面
function showChangePasswordPage() {
  document.getElementById("profilePage").style.display = "none";
  document.getElementById("changeUsernamePage").style.display = "none";
  document.getElementById("changePasswordPage").style.display = "block";
  document.getElementById("readingHistoryPage").style.display = "none";
}

// 显示阅读历史页面
function showReadingHistoryPage() {
  document.getElementById("profilePage").style.display = "none";
  document.getElementById("changeUsernamePage").style.display = "none";
  document.getElementById("changePasswordPage").style.display = "none";
  document.getElementById("readingHistoryPage").style.display = "block";
}

// 返回用户资料页面
function showProfilePage() {
  document.getElementById("profilePage").style.display = "block";
  document.getElementById("changeUsernamePage").style.display = "none";
  document.getElementById("changePasswordPage").style.display = "none";
  document.getElementById("readingHistoryPage").style.display = "none";
}

// 更新用户名
function updateUsername() {
  const newUsername = document.getElementById("newUsername").value;
  if (newUsername) {
    alert("用户名已成功更新为: " + newUsername);
    document.getElementById("usernameDisplay").textContent =
      "User Name: " + newUsername;
    showProfilePage();
  } else {
    alert("请输入新用户名");
  }
}

// 更新密码
function updatePassword() {
  const verificationCode = document.getElementById("verificationCode").value;
  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!verificationCode) {
    alert("请输入验证码");
    return;
  }

  if (!newPassword || newPassword.length < 6) {
    alert("密码长度至少为6位");
    return;
  }

  if (newPassword !== confirmPassword) {
    alert("两次输入的密码不一致");
    return;
  }

  alert("密码已成功更新");
  showProfilePage();
}

// 导航栏点击事件
document.querySelectorAll(".nav-links li").forEach((item) => {
  item.addEventListener("click", function () {
    // 移除所有导航项的激活状态
    document.querySelectorAll(".nav-links li").forEach((navItem) => {
      navItem.classList.remove("active");
    });

    // 添加当前导航项的激活状态
    this.classList.add("active");

    // 获取对应页面的ID
    const pageId = this.getAttribute("data-page");

    // 隐藏所有页面
    document.getElementById("profilePage").style.display = "none";
    document.getElementById("changeUsernamePage").style.display = "none";
    document.getElementById("changePasswordPage").style.display = "none";
    document.getElementById("readingHistoryPage").style.display = "none";

    // 显示对应页面并更新页面标题
    switch (pageId) {
      case "home":
        document.getElementById("pageTitle").textContent = "Home";
        break;
      case "user-profile":
        showProfilePage();
        document.getElementById("pageTitle").textContent = "User Profile";
        break;
      case "my-book":
        document.getElementById("pageTitle").textContent = "My Book";
        break;
      case "goal-setting":
        document.getElementById("pageTitle").textContent = "Goal Setting";
        break;
      case "reading-history":
        showReadingHistoryPage();
        document.getElementById("pageTitle").textContent = "Reading History";
        break;
      case "settings":
        document.getElementById("pageTitle").textContent = "Settings";
        break;
      case "log-out":
        document.getElementById("pageTitle").textContent = "Log out";
        alert("您已成功退出登录");
        break;
    }
  });
});
