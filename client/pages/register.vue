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
						<router-link to="/login">
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

		<!-- ************ SIGNUP FORM ******************** -->
		<form>
			<div class="_log_form_main">
				<h2 class="_log_form_title">Sign Up</h2>
				<div class="_log_form">
					<!-- **********FIRST NAME*********** -->
					<div class="_log_input_group">
						<Input
							v-model="userInfo.first_name"
							placeholder="First name"
							size="large"
							type="text"
						></Input>
					</div>
					<!-- ********LAST NAME ******* -->
					<div class="_log_input_group">
						<Input
							v-model="userInfo.last_name"
							placeholder="Last name"
							size="large"
							type="text"
						></Input>
					</div>
					<!-- ************* EMAIL ************* -->
					<div class="_log_input_group">
						<Input
							v-model="userInfo.email"
							placeholder="Email address"
							size="large"
							type="text"
						></Input>
					</div>
					<!-- ******PASSWORD******* -->
					<div class="_log_input_group">
						<Input
							v-model="userInfo.psd"
							placeholder="Password"
							size="large"
							type="password"
							password
						></Input>
					</div>
					<!-- ****** CONFIRM PASSWORD******* -->
					<div class="_log_input_group">
						<Input
							v-model="confirmPassword"
							placeholder="Confirm password"
							size="large"
							type="password"
							password
						></Input>
					</div>
					<!-- *********GENDER************* -->
					<div class="_log_input_group">
						<Select
							placeholder="Please select your gender"
							size="large"
							v-model="userInfo.gender"
						>
							<Option value="Female">Female</Option>
							<Option value="Male">Male</Option>
							<Option value="Other">Other</Option>
						</Select>
					</div>
					<!-- *************ACCEPT PRIVACY******** -->
					<div class="_log_input_group">
						<Checkbox v-model="terms" size="small" border>
							I agree with the <a href="">Terms</a> &
							<a href="">Privacy</a></Checkbox
						>
					</div>
					<div v-if="responseMessage !== null">
						<h3>{{ responseMessage }}</h3>
					</div>
					<div class="_log_button">
						<Button size="large" type="success" v-on:click="signup"
							>Signup</Button
						>
					</div>
				</div>
			</div>
		</form>
		<!-- Form -->
	</div>
</template>
<script>
export default {
	midleware: "guest",
	data() {
		return {
			userInfo: {
				email: "",
				first_name: "",
				last_name: "",
				psd: "",
				gender: null,
			},
			responseMessage: null,
			terms: false,
			confirmPassword: "",
		};
	},
	methods: {
		signup() {
			console.log("i am signup called");
			console.log(this.userInfo.email);
			console.log(this.userInfo.psd);
			console.log(
				this.userInfo.first_name + " " + this.userInfo.last_name
			);
			console.log(this.terms);
			console.log(this.userInfo.gender);
			// CHECK IF USER AGREED TO THE TERMS AND CONDITION
			if (!this.terms) {
				this.responseMessage =
					"Please accept out terms&condition to proceed";
			} else if (this.userInfo.gender === null) {
				this.responseMessage = "please select your gender";
			} else this.responseMessage = null;
		},
	},
};
</script>