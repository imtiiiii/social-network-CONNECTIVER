<template>
	<div>
		<div class="_2menu">
			<div class="_2menu_con">
				<div class="row align-items-center">
					<div class="col">
						<router-link to="/">
							<h3 class="_menu_logo_text">
								<span class="_menu_logo_symbol">C</span>
								<span class="_menu_logo_text_main"
									>CONNECTIVER</span
								>
							</h3>
						</router-link>
					</div>

					<div class="col-auto">
						<router-link to="/logIn">
							<button class="_log_btn _2menu_long" type="button">
								Login
							</button>
						</router-link>
					</div>
				</div>
			</div>
		</div>

		<!-- Banner -->
		<div class="_4banner">
			<div class="_4banner_main">
				<h1 class="_4banner_title">Connectiver</h1>
				<p class="_4banner_text">
					Creating a conscious and safe community where human<br />
					connection and new ideas can thrive
				</p>
			</div>
		</div>
		<!-- Banner -->

		<!-- Form -->
		<!-- ******************** SIGN UP FORM *********** -->
		<form v-on:submit.prevent="signup">
			<div class="_log_form_main">
				<h2 class="_log_form_title">Sign Up</h2>

				<div class="_log_form">
					<div class="_log_input_group">
						<!-- *********** FIRST NAME ************* -->
						<input
							class="_log_input"
							placeholder="First name"
							type="text"
							required
							v-model="firstName"
						/>
					</div>
					<div class="_log_input_group">
						<!-- *********** LAST NAME ************* -->
						<input
							class="_log_input"
							placeholder="Last name"
							type="text"
							v-model="lastName"
						/>
					</div>
					<div class="_log_input_group">
						<!-- *********** EMAIL ************* -->
						<input
							class="_log_input"
							placeholder="Email address"
							type="text"
							required
							v-model="email"
						/>
					</div>
					<div class="_log_input_group">
						<!-- *********** PASSWORD ************* -->
						<input
							class="_log_input"
							placeholder="Password"
							type="password"
							required
							v-model="password"
						/>
					</div>
					<div class="_log_input_group">
						<!-- *********** CONFIRM PASSWORD ************* -->
						<input
							class="_log_input"
							placeholder="Confirm password"
							type="text"
							required
							v-model="confirmPassword"
						/>
					</div>
					<div class="_log_input_group">
						<select class="_1select" v-model="gender">
							<option selected="true" disabled>Gender</option>
							<option>Female</option>
							<option>Male</option>
							<option>Other</option>
						</select>
					</div>

					<div class="_log_input_group">
						<div class="_log_checkBox">
							<input type="checkbox" id="html" v-model="terms" />
							<label for="html"
								>I agree with the <a href="">Terms</a> &
								<a href="">Privacy</a></label
							>
						</div>
					</div>
					<div class="_log_button">
						<button class="_log_btn _btn_long" type="submit">
							Sign Up
						</button>
					</div>
				</div>
			</div>
		</form>
		<!-- Form -->
	</div>
</template>
<script>
export default {
	data() {
		return {
			email: "",
			firstName: "",
			lastName: "",
			terms: false,
			password: "",
			confirmPassword: "",
			gender: "",
			responseMessage: "",
		};
	},
	methods: {
		signup(event) {
			console.log(this.email);
			console.log(this.password);
			console.log(this.firstName + " " + this.lastName);
			console.log(this.terms);
			console.log(this.gender[0]);
		},
	},
};
</script>