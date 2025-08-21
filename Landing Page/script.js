 // Page navigation
        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Show selected page
            document.getElementById(pageId + 'Page').classList.add('active');
        }
        // Update navigation
            if (pageId !== 'landing' && pageId !== 'signup' && pageId !== 'login') {
                document.getElementById('navBar').style.display = 'block';
                document.querySelectorAll('.nav-tab').forEach(tab => {
                    tab.classList.remove('active');
                });
                document.querySelector(`.nav-tab[onclick="showPage('${pageId}')"]`)?.classList.add('active');
            } else {
                document.getElementById('navBar').style.display = 'none';
            }
        

 // Authentication
        function socialLogin(provider) {
            showLoading();
            setTimeout(() => {
                hideLoading();
                showAchievement(`🎉 Welcome to RecycLens! Signed in with ${provider}`);
                showPage('dashboard');
            }, 1500);
        }

// Handle signup form
        document.getElementById('signupForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            showLoading();
            setTimeout(() => {
                hideLoading();
                showAchievement('🌱 Welcome to RecycLens! Your sustainability journey begins now!');
                showPage('dashboard');
            }, 2000);
        });

        // Handle login form
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            showLoading();
            setTimeout(() => {
                hideLoading();
                showAchievement('🌟 Welcome back! Ready to continue making an impact?');
                showPage('dashboard');
            }, 1000);
        });
         function showForgotPassword() {
            showAchievement('📧 Password reset link sent to your email!');
        }

        function logout() {
            showAchievement('👋 Thanks for making the world more sustainable! See you soon');
            setTimeout(() => {
                showPage('landing');
            }, 1000);
        }
        // Initialize the app
        window.addEventListener('load', function() {
            console.log('🌱 RecycLens initialized!');
            // Start with landing page
            showPage('landing');
            
            // Animate global stats
            setTimeout(() => {
                animateGlobalStats();
            }, 500);
        });

        function animateGlobalStats() {
            animateCounter('globalItems', 2400000);
            animateCounter('globalCO2', 1847);
            animateCounter('globalUsers', 156000);
            animateCounter('globalIdeas', 43200);
        }
        // Close modal when clicking outside
        window.addEventListener('click', function(e) {
            const modal = document.getElementById('resultModal');
            if (e.target === modal) {
                closeModal();
            }
        });