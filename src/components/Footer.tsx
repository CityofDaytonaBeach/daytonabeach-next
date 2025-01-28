'use client';

import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            {/* Main Footer */}
            <div className="footer-container">
                <div className="footer-grid">
                    {/* City Hall Info */}
                    <div className="footer-section">
                        <h3 className="footer-title">City Hall</h3>
                        <div className="space-y-4">
                            <div className="footer-address">
                                <i className="fas fa-map-marker-alt"></i>
                                <div>
                                    <p className="font-medium">City Hall</p>
                                    <p>301 S. Ridgewood Avenue</p>
                                    <p>Daytona Beach, FL 32114</p>
                                </div>
                            </div>
                            <div className="footer-contact">
                                <i className="fas fa-phone"></i>
                                <a href="tel:386-671-8400">386-671-8400</a>
                            </div>
                            <div className="footer-hours">
                                <p className="font-medium">Hours of Operation</p>
                                <p>Monday through Friday</p>
                                <p>8 AM to 5 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Department Hours */}
                    <div className="footer-section">
                        <h3 className="footer-title">Department Hours</h3>
                        <div className="space-y-6">
                            <div className="footer-department">
                                <p className="department-name">Permits & Licensing</p>
                                <p>Monday through Friday</p>
                                <p>8 AM to 4 PM</p>
                            </div>
                            <div className="footer-department">
                                <p className="department-name">Utility Billing</p>
                                <p>Monday through Friday</p>
                                <p>8 AM to 4:30 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Public Records */}
                    <div className="footer-section">
                        <h3 className="footer-title">Public Records</h3>
                        <div className="space-y-4">
                            <p className="font-medium">Custodian of Public Records</p>
                            <div>
                                <p>Letitia LaMagna, City Clerk</p>
                                <p>301 S. Ridgewood Ave., Room 210</p>
                                <p>Daytona Beach, FL 32114</p>
                            </div>
                            <div className="footer-contact">
                                <i className="fas fa-phone"></i>
                                <a href="tel:386-671-8023">386-671-8023</a>
                            </div>
                            <div className="footer-contact">
                                <i className="fas fa-envelope"></i>
                                <a href="#">Email the City Clerk</a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="footer-quick-links">
                            <li><a href="#">Beach Info</a></li>
                            <li><a href="#">CODB External Share Site</a></li>
                            <li><a href="#">Community Redevelopment Agency</a></li>
                            <li><a href="#">Employee Login</a></li>
                            <li><a href="#">Police Reports</a></li>
                            <li><a href="#">Public Records</a></li>
                            <li><a href="#">Riverfront Shops</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <div className="footer-bottom-content">
                        <div className="footer-copyright">
                            &copy; {currentYear} City of Daytona Beach. All rights reserved.
                        </div>
                        <div className="footer-social-connect">
                            <div className="footer-social-icons">
                                <span>Connect With Us:</span>
                                <div className="footer-social-icons-grid">
                                    <a href="https://www.facebook.com/DBCityInfo/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="https://twitter.com/DaytonaBeachGov" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="https://www.instagram.com/daytonabeachgov/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCw8HiQVhKPB_o-Gre6pl3vg" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/company/city-daytona-beach" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="https://nextdoor.com/agency-detail/fl/daytona-beach/city-of-daytona-beach" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Nextdoor">
                                        <i className="fas fa-home"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="footer-divider"></div>
                            <div className="footer-links">
                                <a href="/privacy">Privacy Policy</a>
                                <a href="/accessibility">Accessibility</a>
                                <a href="/sitemap">Sitemap</a>
                                <div className="footer-divider"></div>
                                <a href="https://www.youtube.com/channel/UCV7yS9_5zQuzUMGVXDAynGA/live" target="_blank" rel="noopener noreferrer" className="watch-live">
                                    <i className="fas fa-circle"></i>
                                    Watch Live
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
