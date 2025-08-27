// Integrated Portfolio + Admin Console Application - FIXED
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing Integrated Portfolio + Admin Console - FIXED VERSION...');
    
    // Configuration
    const ADMIN_PASSWORD = 'devops2024';
    let isAdminAuthenticated = false;
    let currentAdminPage = 'dashboard';
    
    // Metrics data
    const metricsData = {
        totalProjects: 3,
        contactMessages: 0,
        skillCategories: 6,
        screenshots: 0
    };

    // Initialize all components
    try {
        initializeAdminSystem();
        initializeNavigation();
        initializeContactForm();
        initializeSkillsAnimations();
        initializeScrollEffects();
        initializeBackToTop();
        
        console.log('✅ All systems initialized successfully!');
    } catch (error) {
        console.error('❌ Initialization error:', error);
    }

    // FIXED Admin System - Ensure modal works
    function initializeAdminSystem() {
        console.log('🔐 Initializing FIXED Admin Console...');
        
        const adminNavLink = document.getElementById('admin-nav-link');
        const adminModal = document.getElementById('admin-modal');
        const adminConsole = document.getElementById('admin-console');
        const portfolioContainer = document.getElementById('portfolio-container');
        const adminLoginForm = document.getElementById('admin-login-form');
        const modalClose = document.getElementById('modal-close');
        const modalOverlay = document.getElementById('modal-overlay');
        const previewSiteBtn = document.getElementById('preview-site-btn');
        const logoutConsoleBtn = document.getElementById('logout-console-btn');

        console.log('🔍 Elements found:', {
            adminNavLink: !!adminNavLink,
            adminModal: !!adminModal,
            adminConsole: !!adminConsole,
            portfolioContainer: !!portfolioContainer
        });

        // FIXED Admin navigation link handler
        if (adminNavLink) {
            // Clear any existing handlers
            adminNavLink.onclick = null;
            
            adminNavLink.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                
                console.log('🔐 Admin link clicked - FIXED handler!');
                
                if (isAdminAuthenticated) {
                    console.log('🔓 Already authenticated, showing admin console');
                    showAdminConsole();
                } else {
                    console.log('🔒 Not authenticated, showing login modal');
                    showAdminModal();
                }
                
                return false;
            });
            
            console.log('✅ FIXED Admin nav link event listener attached');
        } else {
            console.error('❌ Admin nav link not found!');
        }

        // Modal controls - FIXED
        if (modalClose) {
            modalClose.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('🔐 Modal close clicked');
                hideAdminModal();
            });
        }
        
        if (modalOverlay) {
            modalOverlay.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('🔐 Modal overlay clicked');
                hideAdminModal();
            });
        }

        // FIXED Admin login form
        if (adminLoginForm) {
            adminLoginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('🔐 Login form submitted');
                handleAdminLogin();
            });
        } else {
            console.error('❌ Admin login form not found!');
        }

        // Preview site button
        if (previewSiteBtn) {
            previewSiteBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('👁️ Preview site clicked');
                showPortfolio();
                showNotification('👁️ Switched to Portfolio view', 'info');
            });
        }

        // Logout button
        if (logoutConsoleBtn) {
            logoutConsoleBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('🚪 Logout clicked');
                handleAdminLogout();
            });
        }

        // Initialize admin navigation
        initializeAdminNavigation();
        
        // Handle escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                if (adminModal && !adminModal.classList.contains('hidden')) {
                    console.log('⌨️ Escape key pressed');
                    hideAdminModal();
                }
            }
        });

        // FIXED Modal Functions
        function showAdminModal() {
            console.log('🔐 FIXED: Showing admin login modal...');
            
            if (!adminModal) {
                console.error('❌ Admin modal element not found!');
                showNotification('❌ Admin modal not available', 'error');
                return;
            }
            
            try {
                // FIXED: Force show modal with multiple methods
                adminModal.classList.remove('hidden');
                adminModal.style.display = 'flex';
                adminModal.style.opacity = '1';
                adminModal.style.visibility = 'visible';
                adminModal.style.pointerEvents = 'all';
                adminModal.style.zIndex = '10000';
                
                document.body.style.overflow = 'hidden';
                
                console.log('✅ FIXED: Admin modal should now be visible');
                
                // Focus on password input
                setTimeout(() => {
                    const passwordInput = document.getElementById('admin-password');
                    if (passwordInput) {
                        passwordInput.focus();
                        console.log('✅ Password input focused');
                    }
                }, 200);
                
                showNotification('🔐 Admin login required - Enter: devops2024', 'info');
                
            } catch (error) {
                console.error('❌ Error showing admin modal:', error);
                showNotification('❌ Error opening admin modal', 'error');
            }
        }

        function hideAdminModal() {
            console.log('🔐 FIXED: Hiding admin login modal...');
            
            if (!adminModal) {
                console.warn('⚠️ Admin modal element not found during hide');
                return;
            }
            
            try {
                adminModal.classList.add('hidden');
                adminModal.style.opacity = '0';
                adminModal.style.visibility = 'hidden';
                adminModal.style.pointerEvents = 'none';
                
                document.body.style.overflow = '';
                
                // Clear form
                if (adminLoginForm) {
                    adminLoginForm.reset();
                    clearPasswordError();
                }
                
                console.log('✅ FIXED: Admin modal hidden');
                
            } catch (error) {
                console.error('❌ Error hiding admin modal:', error);
            }
        }

        function handleAdminLogin() {
            console.log('🔐 FIXED: Processing admin login...');
            
            const passwordInput = document.getElementById('admin-password');
            
            if (!passwordInput) {
                console.error('❌ Password input not found');
                showNotification('❌ Login form error', 'error');
                return;
            }
            
            const password = passwordInput.value.trim();
            console.log('🔐 Password entered, length:', password.length);

            // Clear previous errors
            clearPasswordError();

            if (!password) {
                showPasswordError('Password is required');
                console.log('❌ Password field is empty');
                return;
            }

            if (password !== ADMIN_PASSWORD) {
                showPasswordError('Invalid password. Please try again.');
                passwordInput.value = '';
                passwordInput.focus();
                console.log('❌ Invalid password entered');
                showNotification('❌ Invalid admin password', 'error');
                return;
            }

            // FIXED: Successful login
            console.log('✅ FIXED: Admin login successful!');
            isAdminAuthenticated = true;
            hideAdminModal();
            showAdminConsole();
            showNotification('🔓 Admin Console access granted!', 'success');
        }

        function handleAdminLogout() {
            console.log('🔐 FIXED: Processing admin logout...');
            
            isAdminAuthenticated = false;
            showPortfolio();
            showNotification('🔒 Logged out from Admin Console', 'info');
        }

        function showAdminConsole() {
            console.log('🔐 FIXED: Showing EXACT Admin Console...');
            
            if (!adminConsole || !portfolioContainer) {
                console.error('❌ Admin console or portfolio container not found!');
                showNotification('❌ Admin console not available', 'error');
                return;
            }
            
            try {
                // FIXED: Hide portfolio, show admin console
                portfolioContainer.classList.add('hidden');
                portfolioContainer.style.display = 'none';
                
                adminConsole.classList.remove('hidden');
                adminConsole.style.display = 'block';
                adminConsole.style.opacity = '1';
                adminConsole.style.visibility = 'visible';
                adminConsole.style.pointerEvents = 'all';
                
                document.body.style.overflow = 'auto';
                
                // Update metrics display
                updateMetricsDisplay();
                
                console.log('✅ FIXED: EXACT Admin Console is now visible');
                
            } catch (error) {
                console.error('❌ Error showing admin console:', error);
                showNotification('❌ Error opening admin console', 'error');
            }
        }

        function showPortfolio() {
            console.log('🌐 FIXED: Showing Portfolio...');
            
            if (!adminConsole || !portfolioContainer) {
                console.error('❌ Admin console or portfolio container not found!');
                return;
            }
            
            try {
                // FIXED: Hide admin console, show portfolio
                adminConsole.classList.add('hidden');
                adminConsole.style.display = 'none';
                
                portfolioContainer.classList.remove('hidden');
                portfolioContainer.style.display = 'block';
                
                document.body.style.overflow = 'auto';
                
                console.log('✅ FIXED: Portfolio is now visible');
                
            } catch (error) {
                console.error('❌ Error showing portfolio:', error);
            }
        }

        function showPasswordError(message) {
            const errorElement = document.getElementById('password-error');
            const passwordInput = document.getElementById('admin-password');
            
            if (errorElement) {
                errorElement.textContent = message;
                errorElement.style.display = 'block';
                errorElement.style.color = 'var(--color-error)';
            }
            if (passwordInput) {
                passwordInput.style.borderColor = 'var(--color-error)';
            }
            
            console.log('❌ Password error shown:', message);
        }

        function clearPasswordError() {
            const errorElement = document.getElementById('password-error');
            const passwordInput = document.getElementById('admin-password');
            
            if (errorElement) {
                errorElement.textContent = '';
                errorElement.style.display = 'none';
            }
            if (passwordInput) {
                passwordInput.style.borderColor = '';
            }
        }
        
        console.log('✅ FIXED: Admin system initialization completed');
    }

    // FIXED Admin Navigation - EXACT Console Navigation
    function initializeAdminNavigation() {
        const adminNavLinks = document.querySelectorAll('.admin-nav-link');
        const adminPages = document.querySelectorAll('.admin-page');

        console.log('📋 FIXED: Initializing admin navigation:', adminNavLinks.length, 'links');

        adminNavLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const targetPage = this.getAttribute('data-page');
                console.log('📋 FIXED: Switching to admin page:', targetPage);
                
                // Update active link
                adminNavLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                // Update active page
                adminPages.forEach(p => p.classList.remove('active'));
                const targetPageElement = document.getElementById(targetPage + '-page');
                if (targetPageElement) {
                    targetPageElement.classList.add('active');
                    currentAdminPage = targetPage;
                }
                
                showNotification(`📋 Switched to ${targetPage}`, 'info');
            });
        });
        
        console.log('✅ FIXED: Admin navigation initialized');
    }

    // FIXED Update Metrics Display
    function updateMetricsDisplay() {
        console.log('📊 FIXED: Updating metrics display...');
        
        try {
            // Get metric cards by their position and update numbers
            const metricCards = document.querySelectorAll('.metric-card .metric-number');
            
            if (metricCards.length >= 4) {
                metricCards[0].textContent = metricsData.totalProjects; // 3 Total Projects
                metricCards[1].textContent = metricsData.contactMessages; // 0 Contact Messages  
                metricCards[2].textContent = metricsData.skillCategories; // 6 Skill Categories
                metricCards[3].textContent = metricsData.screenshots; // 0 Screenshots
                
                console.log('✅ FIXED: Metrics updated:', metricsData);
            } else {
                console.warn('⚠️ Not all metric cards found:', metricCards.length);
            }
            
        } catch (error) {
            console.error('❌ Error updating metrics:', error);
        }
    }

    // Navigation System
    function initializeNavigation() {
        const navbar = document.getElementById('navbar');
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link:not(.admin-link)');

        console.log('🧭 Initializing navigation system...', navLinks.length, 'links');

        // Mobile menu toggle
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                navToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
                console.log('📱 Mobile menu toggled');
            });
        }

        // Navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                console.log('🧭 Nav link clicked:', this.getAttribute('href'));
                
                // Close mobile menu
                if (navToggle && navMenu) {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
                
                // Scroll to section
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const navbarHeight = navbar ? navbar.offsetHeight : 80;
                    const offsetTop = targetSection.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: Math.max(0, offsetTop),
                        behavior: 'smooth'
                    });
                    
                    // Update active link
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                }
            });
        });

        // Handle logo click
        const navBrand = document.querySelector('.nav-brand a');
        if (navBrand) {
            navBrand.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                
                // Update active nav
                navLinks.forEach(l => l.classList.remove('active'));
                const homeLink = document.querySelector('.nav-link[href="#home"]');
                if (homeLink) homeLink.classList.add('active');
            });
        }

        // Hero buttons
        const heroButtons = document.querySelectorAll('.hero-buttons .btn');
        heroButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const href = this.getAttribute('href');
                if (href && href.startsWith('#')) {
                    const targetSection = document.querySelector(href);
                    
                    if (targetSection) {
                        const navbarHeight = navbar ? navbar.offsetHeight : 80;
                        const offsetTop = targetSection.offsetTop - navbarHeight;
                        
                        window.scrollTo({
                            top: Math.max(0, offsetTop),
                            behavior: 'smooth'
                        });
                        
                        // Update active nav link
                        navLinks.forEach(l => l.classList.remove('active'));
                        const correspondingNavLink = document.querySelector(`.nav-link[href="${href}"]`);
                        if (correspondingNavLink) correspondingNavLink.classList.add('active');
                    }
                }
            });
        });
        
        console.log('✅ Navigation system initialized');
    }

    // Contact Form Functionality
    function initializeContactForm() {
        const contactForm = document.getElementById('contact-form');
        
        if (!contactForm) {
            console.warn('📞 Contact form not found');
            return;
        }

        console.log('📞 Initializing contact form...');

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactFormSubmission();
        });

        function handleContactFormSubmission() {
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            console.log('📧 Processing contact form submission...');

            // Simple validation
            if (!data.name || !data.email || !data.subject || !data.message) {
                showNotification('❌ Please fill in all required fields', 'error');
                return;
            }

            // Create mailto link
            const subject = encodeURIComponent(`Portfolio Contact: ${data.subject}`);
            const body = encodeURIComponent(
                `Hello Jayanth,\n\nName: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\nMessage:\n${data.message}\n\nBest regards,\n${data.name}`
            );
            const mailtoLink = `mailto:kandalajayanth401@gmail.com?subject=${subject}&body=${body}`;
            
            // Open email client
            try {
                window.location.href = mailtoLink;
                
                // Update metrics
                metricsData.contactMessages++;
                updateMetricsDisplay();
                
                // Reset form and show success
                contactForm.reset();
                showNotification('✅ Email client opened successfully!', 'success');
                
            } catch (error) {
                console.error('Error opening email client:', error);
                showNotification('⚠️ Please copy the email: kandalajayanth401@gmail.com', 'info');
            }
        }
    }

    // FIXED Skills Animations - Ensure horizontal layout works
    function initializeSkillsAnimations() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        console.log('🛠️ FIXED: Initializing skills animations:', skillItems.length, 'skills');
        
        // Add hover effects
        skillItems.forEach((item, index) => {
            // Set initial state
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-0.25rem) scale(1.02)';
                
                const progressBar = this.querySelector('.skill-progress');
                if (progressBar) {
                    progressBar.style.transform = 'scaleY(1.2)';
                }
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                
                const progressBar = this.querySelector('.skill-progress');
                if (progressBar) {
                    progressBar.style.transform = 'scaleY(1)';
                }
            });

            // Click interaction
            item.addEventListener('click', function() {
                const skillName = this.querySelector('.skill-name').textContent;
                const skillLevel = this.querySelector('.skill-level').textContent;
                
                showNotification(`🛠️ ${skillName}: ${skillLevel} proficiency`, 'info');
            });
        });

        // FIXED: Intersection Observer for skill animations
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            const skillsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            animateSkills();
                        }, 300);
                        skillsObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });

            skillsObserver.observe(skillsSection);
        }

        function animateSkills() {
            console.log('🎬 FIXED: Animating skills...');
            
            skillItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                    
                    // Animate progress bar
                    const progressBar = item.querySelector('.skill-progress');
                    if (progressBar) {
                        const width = progressBar.getAttribute('data-width');
                        setTimeout(() => {
                            progressBar.style.width = width + '%';
                        }, 200);
                    }
                }, index * 100);
            });
        }
        
        console.log('✅ FIXED: Skills animations initialized');
    }

    // Scroll Effects
    function initializeScrollEffects() {
        const navbar = document.getElementById('navbar');
        const navLinks = document.querySelectorAll('.nav-link:not(.admin-link)');

        // Navbar scroll effect
        let scrollTimeout;
        window.addEventListener('scroll', function() {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                updateNavOnScroll();
                updateActiveNavLink();
            }, 10);
        });

        function updateNavOnScroll() {
            if (navbar) {
                if (window.scrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
        }

        function updateActiveNavLink() {
            const sections = document.querySelectorAll('section[id]');
            const scrollPos = window.scrollY + 150;

            sections.forEach(section => {
                const top = section.offsetTop - 100;
                const bottom = top + section.offsetHeight;
                const id = section.getAttribute('id');
                const navLink = document.querySelector(`.nav-link[href="#${id}"]:not(.admin-link)`);

                if (scrollPos >= top && scrollPos <= bottom) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    if (navLink) navLink.classList.add('active');
                }
            });
        }

        console.log('✅ Scroll effects initialized');
    }

    // Back to Top Button
    function initializeBackToTop() {
        const backToTop = document.getElementById('back-to-top');
        
        if (!backToTop) {
            console.warn('⬆️ Back to top button not found');
            return;
        }

        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
                backToTop.style.display = 'block';
            } else {
                backToTop.classList.remove('show');
                if (!backToTop.classList.contains('show')) {
                    setTimeout(() => {
                        if (!backToTop.classList.contains('show')) {
                            backToTop.style.display = 'none';
                        }
                    }, 300);
                }
            }
        });

        // Scroll to top functionality
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            
            window.scrollTo({ 
                top: 0, 
                behavior: 'smooth' 
            });
            
            // Update active nav to home
            const navLinks = document.querySelectorAll('.nav-link:not(.admin-link)');
            navLinks.forEach(link => link.classList.remove('active'));
            const homeLink = document.querySelector('.nav-link[href="#home"]:not(.admin-link)');
            if (homeLink) homeLink.classList.add('active');
        });
        
        console.log('✅ Back to top button initialized');
    }

    // FIXED Enhanced Notification System
    function showNotification(message, type = 'success') {
        console.log('📢 FIXED: Showing notification:', message, type);
        
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notif => notif.remove());
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = message;
        
        // Apply styles based on type
        const styles = {
            success: {
                background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                color: 'white'
            },
            error: {
                background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                color: 'white'
            },
            info: {
                background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                color: 'white'
            }
        };

        Object.assign(notification.style, {
            position: 'fixed',
            top: '100px',
            right: '20px',
            padding: '1rem 1.5rem',
            borderRadius: '8px',
            zIndex: '99999',
            maxWidth: '350px',
            wordWrap: 'break-word',
            fontWeight: '500',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            cursor: 'pointer',
            animation: 'slideInRight 0.3s ease',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            ...styles[type]
        });
        
        document.body.appendChild(notification);
        
        // Auto remove after 4 seconds
        setTimeout(() => {
            if (notification && notification.parentNode) {
                notification.style.animation = 'slideOutRight 0.3s ease forwards';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.remove();
                    }
                }, 300);
            }
        }, 4000);

        // Allow manual close
        notification.addEventListener('click', function() {
            this.style.animation = 'slideOutRight 0.3s ease forwards';
            setTimeout(() => {
                if (this.parentNode) {
                    this.remove();
                }
            }, 300);
        });
    }

    // Add dynamic CSS animations
    if (!document.getElementById('dynamic-animations')) {
        const style = document.createElement('style');
        style.id = 'dynamic-animations';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
            .skill-item {
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.5s ease;
            }
            .skill-item.animate {
                opacity: 1;
                transform: translateY(0);
            }
            .fade-in {
                animation: fadeInUp 0.6s ease-out forwards;
            }
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Initialize page load
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
        
        // Set initial active nav link
        const homeLink = document.querySelector('.nav-link[href="#home"]:not(.admin-link)');
        if (homeLink) homeLink.classList.add('active');
        
        // Show welcome notification
        setTimeout(() => {
            showNotification('🚀 FIXED: Portfolio + Admin Console loaded successfully!', 'success');
        }, 1000);
        
        console.log('✅ FIXED: Integrated Portfolio + Admin Console loaded successfully!');
    });

    // Global error handler
    window.addEventListener('error', function(e) {
        console.error('Global error:', e.error);
        showNotification('❌ An error occurred. Please refresh the page.', 'error');
    });

    console.log('🔧 FIXED: All features initialized for Integrated Portfolio + Admin Console!');
});