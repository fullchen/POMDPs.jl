var documenterSearchIndex = {"docs": [

{
    "location": "api.html#",
    "page": "API Documentation",
    "title": "API Documentation",
    "category": "page",
    "text": ""
},

{
    "location": "api.html#API-Documentation-1",
    "page": "API Documentation",
    "title": "API Documentation",
    "category": "section",
    "text": "Documentation for the POMDPs.jl user interface. You can get help for any type or function in the module by typing ? in the Julia REPL followed by the name of type or function. For example:julia> using POMDPs\njulia> ?\nhelp?> reward\nsearch: reward\n\n  reward{S,A,O}(pomdp::POMDP{S,A,O}, state::S, action::A, statep::S)\n\n  Returns the immediate reward for the s-a-s triple\n\n  reward{S,A,O}(pomdp::POMDP{S,A,O}, state::S, action::A)\n\n  Returns the immediate reward for the s-a pair\nCurrentModule = POMDPs"
},

{
    "location": "api.html#Contents-1",
    "page": "API Documentation",
    "title": "Contents",
    "category": "section",
    "text": "Pages = [\"api.md\"]"
},

{
    "location": "api.html#Index-1",
    "page": "API Documentation",
    "title": "Index",
    "category": "section",
    "text": "Pages = [\"api.md\"]"
},

{
    "location": "api.html#POMDPs.POMDP",
    "page": "API Documentation",
    "title": "POMDPs.POMDP",
    "category": "type",
    "text": "POMDP{S,A,O}\n\nAbstract base type for a partially observable Markov decision process.\n\nS: state type\nA: action type\nO: observation type\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.MDP",
    "page": "API Documentation",
    "title": "POMDPs.MDP",
    "category": "type",
    "text": "MDP{S,A}\n\nAbstract base type for a fully observable Markov decision process.\n\nS: state type\nA: action type\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.Solver",
    "page": "API Documentation",
    "title": "POMDPs.Solver",
    "category": "type",
    "text": "Base type for an MDP/POMDP solver\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.Policy",
    "page": "API Documentation",
    "title": "POMDPs.Policy",
    "category": "type",
    "text": "Base type for a policy (a map from every possible belief, or more abstract policy state, to an optimal or suboptimal action)\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.Updater",
    "page": "API Documentation",
    "title": "POMDPs.Updater",
    "category": "type",
    "text": "Abstract type for an object that defines how the belief should be updated\n\nA belief is a general construct that represents the knowledge an agent has about the state of the system. This can be a probability distribution, an action observation history or a more general representation.\n\n\n\n\n\n"
},

{
    "location": "api.html#Types-1",
    "page": "API Documentation",
    "title": "Types",
    "category": "section",
    "text": "POMDP\nMDP\nSolver\nPolicy\nUpdater"
},

{
    "location": "api.html#Model-Functions-1",
    "page": "API Documentation",
    "title": "Model Functions",
    "category": "section",
    "text": ""
},

{
    "location": "api.html#POMDPs.transition",
    "page": "API Documentation",
    "title": "POMDPs.transition",
    "category": "function",
    "text": "transition{S,A,O}(problem::POMDP{S,A,O}, state::S, action::A)\ntransition{S,A}(problem::MDP{S,A}, state::S, action::A)\n\nReturn the transition distribution from the current state-action pair\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.observation",
    "page": "API Documentation",
    "title": "POMDPs.observation",
    "category": "function",
    "text": "observation{S,A,O}(problem::POMDP{S,A,O}, statep::S)\nobservation{S,A,O}(problem::POMDP{S,A,O}, action::A, statep::S)\nobservation{S,A,O}(problem::POMDP{S,A,O}, state::S, action::A, statep::S)\n\nReturn the observation distribution. You need only define the method with the fewest arguments needed to determine the observation distribution.\n\nExample\n\nusing POMDPToolbox # for SparseCat\n\nstruct MyPOMDP <: POMDP{Int, Int, Int} end\n\nobservation(p::MyPOMDP, sp::Int) = SparseCat([sp-1, sp, sp+1], [0.1, 0.8, 0.1])\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.initialstate_distribution",
    "page": "API Documentation",
    "title": "POMDPs.initialstate_distribution",
    "category": "function",
    "text": "initialstate_distribution(pomdp::POMDP)\ninitialstate_distribution(mdp::MDP)\n\nReturn a distribution of the initial state of the pomdp or mdp.\n\n\n\n\n\n"
},

{
    "location": "api.html#explicit_api-1",
    "page": "API Documentation",
    "title": "Explicit",
    "category": "section",
    "text": "These functions return distributions.transition\nobservation\ninitialstate_distribution"
},

{
    "location": "api.html#POMDPs.generate_s",
    "page": "API Documentation",
    "title": "POMDPs.generate_s",
    "category": "function",
    "text": "generate_s{S,A}(p::Union{POMDP{S,A},MDP{S,A}}, s::S, a::A, rng::AbstractRNG)\n\nReturn the next state given current state s and action taken a.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.generate_o",
    "page": "API Documentation",
    "title": "POMDPs.generate_o",
    "category": "function",
    "text": "generate_o{S,A,O}(p::POMDP{S,A,O}, s::S, a::A, sp::S, rng::AbstractRNG)\n\nReturn the next observation given current state s, action taken a and next state sp.\n\nUsually the observation would only depend on the next state sp.\n\ngenerate_o{S,A,O}(p::POMDP{S,A,O}, s::S, rng::AbstractRNG)\n\nReturn the observation from the current state. This should be used to generate initial observations.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.generate_sr",
    "page": "API Documentation",
    "title": "POMDPs.generate_sr",
    "category": "function",
    "text": "generate_sr{S}(p::Union{POMDP{S},MDP{S}}, s, a, rng::AbstractRNG)\n\nReturn the next state sp and reward for taking action a in current state s.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.generate_so",
    "page": "API Documentation",
    "title": "POMDPs.generate_so",
    "category": "function",
    "text": "generate_so{S,A,O}(p::POMDP{S,A,O}, s::S, a::A, rng::AbstractRNG)\n\nReturn the next state sp and observation o.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.generate_or",
    "page": "API Documentation",
    "title": "POMDPs.generate_or",
    "category": "function",
    "text": "generate_or{S,A,O}(p::POMDP{S,A,O}, s::S, a::A, sp::S, rng::AbstractRNG)\n\nReturn the observation o and reward for taking action a in current state s reaching state sp.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.generate_sor",
    "page": "API Documentation",
    "title": "POMDPs.generate_sor",
    "category": "function",
    "text": "generate_sor{S,A,O}(p::POMDP{S,A,O}, s::S, a::A, rng::AbstractRNG)\n\nReturn the next state sp, observation o and reward for taking action a in current state s.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.initialstate",
    "page": "API Documentation",
    "title": "POMDPs.initialstate",
    "category": "function",
    "text": "initialstate{S}(p::Union{POMDP{S},MDP{S}}, rng::AbstractRNG)\n\nReturn the initial state for the problem p.\n\nUsually the initial state is sampled from an initial state distribution.\n\n\n\n\n\n"
},

{
    "location": "api.html#generative_api-1",
    "page": "API Documentation",
    "title": "Generative",
    "category": "section",
    "text": "These functions should return states, observations, and rewards.generate_s\ngenerate_o\ngenerate_sr\ngenerate_so\ngenerate_or\ngenerate_sor\ninitialstate"
},

{
    "location": "api.html#POMDPs.states",
    "page": "API Documentation",
    "title": "POMDPs.states",
    "category": "function",
    "text": "states(problem::POMDP)\nstates(problem::MDP)\n\nReturns the complete state space of a POMDP. \n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.actions",
    "page": "API Documentation",
    "title": "POMDPs.actions",
    "category": "function",
    "text": "actions(problem::POMDP)\nactions(problem::MDP)\n\nReturns the entire action space of a POMDP.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.observations",
    "page": "API Documentation",
    "title": "POMDPs.observations",
    "category": "function",
    "text": "observations(problem::POMDP)\n\nReturn the entire observation space.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.reward",
    "page": "API Documentation",
    "title": "POMDPs.reward",
    "category": "function",
    "text": "reward{S,A,O}(problem::POMDP{S,A,O}, state::S, action::A)\nreward{S,A}(problem::MDP{S,A}, state::S, action::A)\n\nReturn the immediate reward for the s-a pair\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.isterminal",
    "page": "API Documentation",
    "title": "POMDPs.isterminal",
    "category": "function",
    "text": "isterminal{S,A,O}(problem::POMDP{S,A,O}, state::S)\nisterminal{S,A}(problem::MDP{S,A}, state::S)\n\nCheck if state s is terminal\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.discount",
    "page": "API Documentation",
    "title": "POMDPs.discount",
    "category": "function",
    "text": "discount(problem::POMDP)\ndiscount(problem::MDP)\n\nReturn the discount factor for the problem.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.n_states",
    "page": "API Documentation",
    "title": "POMDPs.n_states",
    "category": "function",
    "text": "n_states(problem::POMDP)\nn_states(problem::MDP)\n\nReturn the number of states in problem. Used for discrete models only.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.n_actions",
    "page": "API Documentation",
    "title": "POMDPs.n_actions",
    "category": "function",
    "text": "n_actions(problem::POMDP)\nn_actions(problem::MDP)\n\nReturn the number of actions in problem. Used for discrete models only.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.n_observations",
    "page": "API Documentation",
    "title": "POMDPs.n_observations",
    "category": "function",
    "text": "n_observations(problem::POMDP)\n\nReturn the number of observations in problem. Used for discrete models only.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.stateindex",
    "page": "API Documentation",
    "title": "POMDPs.stateindex",
    "category": "function",
    "text": "stateindex{S,A,O}(problem::POMDP{S,A,O}, s::S)\nstateindex{S,A}(problem::MDP{S,A}, s::S)\n\nReturn the integer index of state s. Used for discrete models only.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.actionindex",
    "page": "API Documentation",
    "title": "POMDPs.actionindex",
    "category": "function",
    "text": "actionindex{S,A,O}(problem::POMDP{S,A,O}, a::A)\nactionindex{S,A}(problem::MDP{S,A}, a::A)\n\nReturn the integer index of action a. Used for discrete models only.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.obsindex",
    "page": "API Documentation",
    "title": "POMDPs.obsindex",
    "category": "function",
    "text": "obsindex{S,A,O}(problem::POMDP{S,A,O}, o::O)\n\nReturn the integer index of observation o. Used for discrete models only.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.convert_s",
    "page": "API Documentation",
    "title": "POMDPs.convert_s",
    "category": "function",
    "text": "convert_s(::Type{V}, s, problem::Union{MDP,POMDP}) where V<:AbstractArray\nconvert_s(::Type{S}, vec::V, problem::Union{MDP,POMDP}) where {S,V<:AbstractArray}\n\nConvert a state to vectorized form or vice versa.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.convert_a",
    "page": "API Documentation",
    "title": "POMDPs.convert_a",
    "category": "function",
    "text": "convert_a(::Type{V}, a, problem::Union{MDP,POMDP}) where V<:AbstractArray\nconvert_a(::Type{A}, vec::V, problem::Union{MDP,POMDP}) where {A,V<:AbstractArray}\n\nConvert an action to vectorized form or vice versa.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.convert_o",
    "page": "API Documentation",
    "title": "POMDPs.convert_o",
    "category": "function",
    "text": "convert_o(::Type{V}, o, problem::Union{MDP,POMDP}) where V<:AbstractArray\nconvert_o(::Type{O}, vec::V, problem::Union{MDP,POMDP}) where {O,V<:AbstractArray}\n\nConvert an observation to vectorized form or vice versa.\n\n\n\n\n\n"
},

{
    "location": "api.html#common_api-1",
    "page": "API Documentation",
    "title": "Common",
    "category": "section",
    "text": "states\nactions\nobservations\nreward\nisterminal\ndiscount\nn_states\nn_actions\nn_observations\nstateindex\nactionindex\nobsindex\nconvert_s\nconvert_a\nconvert_o"
},

{
    "location": "api.html#Base.rand",
    "page": "API Documentation",
    "title": "Base.rand",
    "category": "function",
    "text": "rand{T}(rng::AbstractRNG, d::Any)\n\nReturn a random element from distribution or space d.\n\nIf d is a state or transition distribution, the sample will be a state; if d is an action distribution, the sample will be an action or if d is an observation distribution, the sample will be an observation.\n\n\n\n\n\n"
},

{
    "location": "api.html#Distributions.pdf",
    "page": "API Documentation",
    "title": "Distributions.pdf",
    "category": "function",
    "text": "pdf(d::Any, x::Any)\n\nEvaluate the probability density of distribution d at sample x.\n\n\n\n\n\n"
},

{
    "location": "api.html#StatsBase.mode",
    "page": "API Documentation",
    "title": "StatsBase.mode",
    "category": "function",
    "text": "mode(d::Any)\n\nReturn the most likely value in a distribution d.\n\n\n\n\n\n"
},

{
    "location": "api.html#Statistics.mean",
    "page": "API Documentation",
    "title": "Statistics.mean",
    "category": "function",
    "text": "mean(d::Any)\n\nReturn the mean of a distribution d.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.dimensions",
    "page": "API Documentation",
    "title": "POMDPs.dimensions",
    "category": "function",
    "text": "dimensions(s::Any)\n\nReturns the number of dimensions in space s.\n\n\n\n\n\n"
},

{
    "location": "api.html#Distributions.support",
    "page": "API Documentation",
    "title": "Distributions.support",
    "category": "function",
    "text": "support(d::Any)\n\nReturn the possible values that can be sampled from distribution d. Values with zero probability may be skipped.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.sampletype",
    "page": "API Documentation",
    "title": "POMDPs.sampletype",
    "category": "function",
    "text": "sampletype(T::Type)\nsampletype(d::Any) = sampletype(typeof(d))\n\nReturn the type of objects that are sampled from a distribution or space d when rand(rng, d) is called.\n\nThe distribution writer should implement the sampletype(::Type) method for the distribution type, then the function can be called for that type or for objects of that type (i.e. the sampletype(d::Any) = sampletype(typeof(d)) default is provided).\n\n\n\n\n\n"
},

{
    "location": "api.html#Distribution/Space-Functions-1",
    "page": "API Documentation",
    "title": "Distribution/Space Functions",
    "category": "section",
    "text": "rand\npdf\nmode\nmean\ndimensions\nsupport\nsampletype"
},

{
    "location": "api.html#POMDPs.update",
    "page": "API Documentation",
    "title": "POMDPs.update",
    "category": "function",
    "text": "update(updater::Updater, belief_old, action, observation)\n\nReturn a new instance of an updated belief given belief_old and the latest action and observation.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.initialize_belief",
    "page": "API Documentation",
    "title": "POMDPs.initialize_belief",
    "category": "function",
    "text": "initialize_belief(updater::Updater,\n                     state_distribution::Any)\ninitialize_belief(updater::Updater, belief::Any)\n\nReturns a belief that can be updated using updater that has similar distribution to state_distribution or belief.\n\nThe conversion may be lossy. This function is also idempotent, i.e. there is a default implementation that passes the belief through when it is already the correct type: initialize_belief(updater::Updater, belief) = belief\n\n\n\n\n\n"
},

{
    "location": "api.html#Belief-Functions-1",
    "page": "API Documentation",
    "title": "Belief Functions",
    "category": "section",
    "text": "update\ninitialize_belief"
},

{
    "location": "api.html#POMDPs.solve",
    "page": "API Documentation",
    "title": "POMDPs.solve",
    "category": "function",
    "text": "solve(solver::Solver, problem::POMDP)\n\nSolves the POMDP using method associated with solver, and returns a policy.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.updater",
    "page": "API Documentation",
    "title": "POMDPs.updater",
    "category": "function",
    "text": "updater(policy::Policy)\n\nReturns a default Updater appropriate for a belief type that policy p can use\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.action",
    "page": "API Documentation",
    "title": "POMDPs.action",
    "category": "function",
    "text": "action{B}(policy::Policy, x::B)\n\nFills and returns action based on the current state or belief, given the policy. B is a generalized information state - can be a state in an MDP, a distribution in POMDP, or any other representation needed to make a decision using the given policy.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.value",
    "page": "API Documentation",
    "title": "POMDPs.value",
    "category": "function",
    "text": "value(p::Policy, s)\nvalue(p::Policy, s, a)\n\nReturns the utility value from policy p given the state (or belief), or state-action (or belief-action) pair.\n\nThe state-action version is commonly referred to as the Q-value.\n\n\n\n\n\n"
},

{
    "location": "api.html#Policy-and-Solver-Functions-1",
    "page": "API Documentation",
    "title": "Policy and Solver Functions",
    "category": "section",
    "text": "solve\nupdater\naction\nvalue"
},

{
    "location": "api.html#POMDPs.Simulator",
    "page": "API Documentation",
    "title": "POMDPs.Simulator",
    "category": "type",
    "text": "Base type for an object defining how simulations should be carried out.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.simulate",
    "page": "API Documentation",
    "title": "POMDPs.simulate",
    "category": "function",
    "text": "simulate(simulator::Simulator, problem::POMDP{S,A,O}, policy::Policy, updater::Updater, initial_belief, initial_state::S)\nsimulate(simulator::Simulator, problem::MDP{S,A}, policy::Policy, initial_state::S)\n\nRun a simulation using the specified policy.\n\nThe return type is flexible and depends on the simulator. Simulations should adhere to the Simulation Standard.\n\n\n\n\n\n"
},

{
    "location": "api.html#Simulator-1",
    "page": "API Documentation",
    "title": "Simulator",
    "category": "section",
    "text": "Simulator\nsimulate"
},

{
    "location": "api.html#Other-1",
    "page": "API Documentation",
    "title": "Other",
    "category": "section",
    "text": "The following functions are not part of the API for specifying and solving POMDPs, but are included in the package."
},

{
    "location": "api.html#POMDPs.statetype",
    "page": "API Documentation",
    "title": "POMDPs.statetype",
    "category": "function",
    "text": "statetype(t::Type)\nstatetype(p::Union{POMDP,MDP})\n\nReturn the state type for a problem type (the S in POMDP{S,A,O}).\n\ntype A <: POMDP{Int, Bool, Bool} end\n\nstatetype(A) # returns Int\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.actiontype",
    "page": "API Documentation",
    "title": "POMDPs.actiontype",
    "category": "function",
    "text": "actiontype(t::Type)\nactiontype(p::Union{POMDP,MDP})\n\nReturn the state type for a problem type (the S in POMDP{S,A,O}).\n\ntype A <: POMDP{Bool, Int, Bool} end\n\nactiontype(A) # returns Int\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.obstype",
    "page": "API Documentation",
    "title": "POMDPs.obstype",
    "category": "function",
    "text": "obstype(t::Type)\n\nReturn the state type for a problem type (the S in POMDP{S,A,O}).\n\ntype A <: POMDP{Bool, Bool, Int} end\n\nobstype(A) # returns Int\n\n\n\n\n\n"
},

{
    "location": "api.html#Type-Inference-1",
    "page": "API Documentation",
    "title": "Type Inference",
    "category": "section",
    "text": "statetype\nactiontype\nobstype"
},

{
    "location": "api.html#POMDPs.check_requirements",
    "page": "API Documentation",
    "title": "POMDPs.check_requirements",
    "category": "function",
    "text": "check_requirements(r::AbstractRequirementSet)\n\nCheck whether the methods in r have implementations with implemented(). Return true if all methods have implementations.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.show_requirements",
    "page": "API Documentation",
    "title": "POMDPs.show_requirements",
    "category": "function",
    "text": "show_requirements(r::AbstractRequirementSet)\n\nCheck whether the methods in r have implementations with implemented() and print out a formatted list showing which are missing. Return true if all methods have implementations.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.get_requirements",
    "page": "API Documentation",
    "title": "POMDPs.get_requirements",
    "category": "function",
    "text": "get_requirements(f::Function, args::Tuple)\n\nReturn a RequirementSet for the function f and arguments args.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.requirements_info",
    "page": "API Documentation",
    "title": "POMDPs.requirements_info",
    "category": "function",
    "text": "requirements_info(s::Solver, p::Union{POMDP,MDP}, ...)\n\nPrint information about the requirement for solver s.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.@POMDP_require",
    "page": "API Documentation",
    "title": "POMDPs.@POMDP_require",
    "category": "macro",
    "text": "@POMDP_require solve(s::CoolSolver, p::POMDP) begin\n    PType = typeof(p)\n    @req states(::PType)\n    @req actions(::PType)\n    @req transition(::PType, ::S, ::A)\n    s = first(states(p))\n    a = first(actions(p))\n    t_dist = transition(p, s, a)\n    @req rand(::AbstractRNG, ::typeof(t_dist))\nend\n\nCreate a get_requirements implementation for the function signature and the requirements block.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.@POMDP_requirements",
    "page": "API Documentation",
    "title": "POMDPs.@POMDP_requirements",
    "category": "macro",
    "text": "reqs = @POMDP_requirements CoolSolver begin\n    PType = typeof(p)\n    @req states(::PType)\n    @req actions(::PType)\n    @req transition(::PType, ::S, ::A)\n    s = first(states(p))\n    a = first(actions(p))\n    t_dist = transition(p, s, a)\n    @req rand(::AbstractRNG, ::typeof(t_dist))\nend\n\nCreate a RequirementSet object.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.@requirements_info",
    "page": "API Documentation",
    "title": "POMDPs.@requirements_info",
    "category": "macro",
    "text": "@requirements_info ASolver() [YourPOMDP()]\n\nPrint information about the requirements for a solver.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.@get_requirements",
    "page": "API Documentation",
    "title": "POMDPs.@get_requirements",
    "category": "macro",
    "text": "@get_requirements f(arg1, arg2)\n\nCall get_requirements(f, (arg1,arg2)).\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.@show_requirements",
    "page": "API Documentation",
    "title": "POMDPs.@show_requirements",
    "category": "macro",
    "text": "@show_requirements solve(solver, problem)\n\nPrint a a list of requirements for a function call.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.@warn_requirements",
    "page": "API Documentation",
    "title": "POMDPs.@warn_requirements",
    "category": "macro",
    "text": "@warn_requirements solve(solver, problem)\n\nPrint a warning if there are unmet requirements.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.@req",
    "page": "API Documentation",
    "title": "POMDPs.@req",
    "category": "macro",
    "text": "@req f( ::T1, ::T2)\n\nConvert a f( ::T1, ::T2) expression to a (f, Tuple{T1,T2})::Req for pushing to a RequirementSet.\n\nIf in a @POMDP_requirements or @POMDP_require block, marks the requirement for including in the set of requirements.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.@subreq",
    "page": "API Documentation",
    "title": "POMDPs.@subreq",
    "category": "macro",
    "text": "@subreq f(arg1, arg2)\n\nIn a @POMDP_requirements or @POMDP_require block, include the requirements for f(arg1, arg2) as a child argument set.\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.implemented",
    "page": "API Documentation",
    "title": "POMDPs.implemented",
    "category": "function",
    "text": "implemented(function, Tuple{Arg1Type, Arg2Type})\n\nCheck whether there is an implementation available that will return a suitable value.\n\n\n\n\n\n"
},

{
    "location": "api.html#Requirements-Specification-1",
    "page": "API Documentation",
    "title": "Requirements Specification",
    "category": "section",
    "text": "check_requirements\nshow_requirements\nget_requirements\nrequirements_info\n@POMDP_require\n@POMDP_requirements\n@requirements_info\n@get_requirements\n@show_requirements\n@warn_requirements\n@req\n@subreq\nimplemented"
},

{
    "location": "api.html#POMDPs.add_registry",
    "page": "API Documentation",
    "title": "POMDPs.add_registry",
    "category": "function",
    "text": "add_registry()\n\nAdds the JuliaPOMDP registry\n\n\n\n\n\n"
},

{
    "location": "api.html#POMDPs.available",
    "page": "API Documentation",
    "title": "POMDPs.available",
    "category": "function",
    "text": "available()\n\nPrints all the available packages in the JuliaPOMDP registry\n\n\n\n\n\n"
},

{
    "location": "api.html#Utility-Tools-1",
    "page": "API Documentation",
    "title": "Utility Tools",
    "category": "section",
    "text": "add_registry\navailable"
},

{
    "location": "concepts.html#",
    "page": "Concepts and Architecture",
    "title": "Concepts and Architecture",
    "category": "page",
    "text": ""
},

{
    "location": "concepts.html#Concepts-and-Architecture-1",
    "page": "Concepts and Architecture",
    "title": "Concepts and Architecture",
    "category": "section",
    "text": "POMDPs.jl aims to coordinate the development of three software components: 1) a problem, 2) a solver, 3) an experiment. Each of these components has a set of abstract types associated with it and a set of functions that allow a user to define each component\'s behavior in a standardized way. An outline of the architecture is shown below.(Image: concepts)The MDP and POMDP types are associated with the problem definition. The Solver and Policy types are associated with the solver or decision-making agent. Typically, the Updater type is also associated with the solver, but a solver may sometimes be used with an updater that was implemented separately. The Simulator type is associated with the experiment.The code components of the POMDPs.jl ecosystem relevant to problems and solvers are shown below. The arrows represent the flow of information from the problems to the solvers. The figure shows the two interfaces that form POMDPs.jl - Explicit and Generative. Details about these interfaces can be found in the section on Defining POMDPs.(Image: interface_relationships)"
},

{
    "location": "concepts.html#POMDPs-and-MDPs-1",
    "page": "Concepts and Architecture",
    "title": "POMDPs and MDPs",
    "category": "section",
    "text": "An MDP is a mathematical framework for sequential decision making under uncertainty, and where all of the uncertainty arrises from outcomes that are partially random and partially under the control of a decision maker. Mathematically, an MDP is a tuple (S,A,T,R), where S is the state space, A is the action space, T is a transition function defining the probability of transitioning to each state given the state and action at the previous time, and R is a reward function mapping every possible transition (s,a,s\') to a real reward value. For more information see a textbook such as [1]. In POMDPs.jl an MDP is represented by a concrete subtype of the MDP abstract type and a set of methods that define each of its components. S and A are defined by implementing states and actions for your specific MDP subtype. R is by implementing reward, and T is defined by implementing transition if the explicit interface is used or generate_s if the generative interface is used.A POMDP is a more general sequential decision making problem in which the agent is not sure what state they are in. The state is only partially observable by the decision making agent. Mathematically, a POMDP is a tuple (S,A,T,R,O,Z) where S, A, T, and R are the same as with MDPs, Z is the agent\'s observation space, and O defines the probability of receiving each observation at a transition. In POMDPs.jl, a POMDP is represented by a concrete subtype of the POMDP abstract type, Z may be defined by the observations function (though an explicit definition is often not required), and O is defined by implementing observation if the explicit interface is used or generate_o if the generative interface is used.POMDPs.jl also contains functions for defining optional problem behavior such as a discount factor or a set of terminal states.More information can be found in the Defining POMDPs section."
},

{
    "location": "concepts.html#beliefs_and_updaters-1",
    "page": "Concepts and Architecture",
    "title": "Beliefs and Updaters",
    "category": "section",
    "text": "In a POMDP domain, the decision-making agent does not have complete information about the state of the problem, so the agent can only make choices based on its \"belief\" about the state. In the POMDP literature, the term \"belief\" is typically defined to mean a probability distribution over all possible states of the system. However, in practice, the agent often makes decisions based on an incomplete or lossy record of past observations that has a structure much different from a probability distribution. For example, if the agent is represented by a finite-state controller, as is the case for Monte-Carlo Value Iteration [2], the belief is the controller state, which is a node in a graph. Another example is an agent represented by a recurrent neural network. In this case, the agent\'s belief is the state of the network. In order to accommodate a wide variety of decision-making approaches in POMDPs.jl, we use the term \"belief\" to denote the set of information that the agent makes a decision on, which could be an exact state distribution, an action-observation history, a set of weighted particles, or the examples mentioned before. In code, the belief can be represented by any built-in or user-defined type.When an action is taken and a new observation is received, the belief is updated by the belief updater. In code, a belief updater is represented by a concrete subtype of the Updater abstract type, and the update(updater, belief, action, observation) function defines how the belief is updated when a new observation is received.Although the agent may use a specialized belief structure to make decisions, the information initially given to the agent about the state of the problem is usually most conveniently represented as a state distribution, thus the initialize_belief function is provided to convert a state distribution to a specialized belief structure that an updater can work with.In many cases, the belief structure is closely related to the solution technique, so it will be implemented by the programmer who writes the solver. In other cases, the agent can use a variety of belief structures to make decisions, so a domain-specific updater implemented by the programmer that wrote the problem description may be appropriate. Finally, some advanced generic belief updaters such as particle filters may be implemented by a third party. The convenience function updater(policy) can be used to get a suitable default updater for a policy, however many policies can work with other updaters.For more information on implementing a belief updater, see Defining a Belief Updater"
},

{
    "location": "concepts.html#Solvers-and-Policies-1",
    "page": "Concepts and Architecture",
    "title": "Solvers and Policies",
    "category": "section",
    "text": "Sequential decision making under uncertainty involves both online and offline calculations. In the broad sense, the term \"solver\" as used in the node in the figure at the top of the page refers to the software package that performs the calculations at both of these times. However, the code is broken up into two pieces, the solver that performs calculations offline and the policy that performs calculations online.In the abstract, a policy is a mapping from every belief that an agent might take to an action. A policy is represented in code by a concrete subtype of the Policy abstract type. The programmer implements action to describe what computations need to be done online. For an online solver such as POMCP, all of the decision computation occurs within action while for an offline solver like SARSOP, there is very little computation within actionThe offline portion of the computation is carried out by the solver, which is represented by a concrete subtype of the Solver abstract type. Computations occur within the solve function. For an offline solver like SARSOP, nearly all of the decision computation occurs within this function, but for some online solvers such as POMCP, solve merely embeds the problem in the policy."
},

{
    "location": "concepts.html#Simulators-1",
    "page": "Concepts and Architecture",
    "title": "Simulators",
    "category": "section",
    "text": "A simulator defines a way to run one or more simulations. It is represented by a concrete subtype of the Simulator abstract type and the simulation is an implemention of simulate. Depending on the simulator, simulate may return a variety of data about the simulation, such as the discounted reward or the state history.[1] Decision Making Under Uncertainty: Theory and Application by Mykel J. Kochenderfer, MIT Press, 2015[2] Bai, H., Hsu, D., & Lee, W. S. (2014). Integrated perception and planning in the continuous space: A POMDP approach. The International Journal of Robotics Research, 33(9), 1288-1302"
},

{
    "location": "def_pomdp.html#",
    "page": "Defining POMDPs",
    "title": "Defining POMDPs",
    "category": "page",
    "text": ""
},

{
    "location": "def_pomdp.html#defining_pomdps-1",
    "page": "Defining POMDPs",
    "title": "Defining POMDPs",
    "category": "section",
    "text": "The expressive nature of POMDPs.jl gives problem writers the flexibility to write their problem in many forms. Custom POMDP problems are defined by implementing the functions specified by the POMDPs API."
},

{
    "location": "def_pomdp.html#Types-of-problem-definitions-1",
    "page": "Defining POMDPs",
    "title": "Types of problem definitions",
    "category": "section",
    "text": "There are two ways of specifying the state dynamics and observation behavior of a POMDP. The problem definition may include either an explicit definition of the probability distributions, or an implicit definition given only by a generative model.An explicit definition contains the transition probabilities for each state and action, T(s  s a), and the observation probabilities for each state-action-state transition, O(o  s a s), (in continuous domains these are probability density functions). A generative definition contains only a single step simulator, s o r = G(s a) (or s r = G(sa) for an MDP).Accordingly, the POMDPs.jl model API is grouped into three sections:The explicit interface containing functions that return distributions\nThe generative interface containing functions that return states and observations\nCommon functions used in both."
},

{
    "location": "def_pomdp.html#What-do-I-need-to-implement?-1",
    "page": "Defining POMDPs",
    "title": "What do I need to implement?",
    "category": "section",
    "text": "Generally, a problem will be defined by implementing eitherAn explicit definition consisting of the three functions in (1) and some functions from (3), or\nA generative definition consisting of some functions from (2) and some functions from (3)(though in some cases (e.g. particle filtering), implementations from all three sections are useful).Note: since an explicit definition contains all of the information required for a generative definition, POMDPs.jl will automatically generate the generative functions at runtime if an explicit model is available.An explicit definition will allow for use with the widest variety of tools and solvers, but a generative definition will generally be much easier to implement.In order to determine which interface to use to express a problem, 2 questions should be asked:Is it impossible to specify the probability distributions explicitly (or difficult compared to writing a state simulator)?\nWhat solvers will be used to solve this, and what are their requirements?If the answer to (1) is yes, then a generative definition should be used. More information about how to analyze question (2) can be found in the Requirements section of the documentation.Specific documentation for the two interfaces can be found here:Explicit\nGenerative"
},

{
    "location": "def_solver.html#",
    "page": "Defining a Solver",
    "title": "Defining a Solver",
    "category": "page",
    "text": ""
},

{
    "location": "def_solver.html#Defining-a-Solver-1",
    "page": "Defining a Solver",
    "title": "Defining a Solver",
    "category": "section",
    "text": "In this section, we will walk through an implementation of the QMDP algorithm. QMDP is the fully observable approximation of a POMDP policy, and relies on the Q-values to determine actions."
},

{
    "location": "def_solver.html#Background-1",
    "page": "Defining a Solver",
    "title": "Background",
    "category": "section",
    "text": "Let\'s say we are working with a POMDP defined by the tuple (mathcalS mathcalA mathcalZ T R O gamma), where mathcalS, mathcalA, mathcalZ are the discrete state, action, and observation spaces respectively. The QMDP algorithm assumes it is given a discrete POMDP. In our model T  mathcalS times mathcalA times mathcalS rightarrow 0 1 is the transition function, R mathcalS times mathcalA rightarrow mathbbR is the reward function, and O mathcalZ times mathcalA times mathcalS rightarrow 01 is the observation function. In a POMDP, our goal is to compute a policy pi that maps beliefs to actions pi b rightarrow a. For QMDP, a belief can be represented by a discrete probability distribution over the state space (although there may be other ways to define a belief in general and POMDPs.jl allows this flexibility).It can be shown (e.g. in [1], section 6.3.2) that the optimal value function for a POMDP can be written in terms of alpha vectors. In the QMDP approximation, there is a single alpha vector that corresponds to each action (alpha_a), and the policy is computed according topi(b) = undersetatextargmax  alpha_a^TbThus, the alpha vectors can be used to compactly represent a QMDP policy."
},

{
    "location": "def_solver.html#QMDP-Algorithm-1",
    "page": "Defining a Solver",
    "title": "QMDP Algorithm",
    "category": "section",
    "text": "QMDP uses the columns of the Q-matrix obtained by solving the MDP defined by (mathcalS mathcalA T R gamma) (that is, the fully observable MDP that forms the basis for the POMDP we are trying to solve). If you are familiar with the value iteration algorithm for MDPs, the procedure for finding these alpha vectors is identical. Let\'s first initialize the alpha vectors alpha_a^0 = 0 for all s, and then iteratealpha_a^k+1(s) = R(sa) + gamma sum_s T(ssa) max_a alpha_a^k(s)After enough iterations, the alpha vectors converge to the QMDP approximation.Remember that QMDP is just an approximation method, and does not guarantee that the alpha vectors you obtain actually represent your POMDP value function. Specifically, QMDP has trouble in problems with information gathering actions (because we completely ignored the observation function when computing our policy). However, QMDP works very well in problems where a particular choice of action has little impact on the reduction in state uncertainty."
},

{
    "location": "def_solver.html#Requirements-for-a-Solver-1",
    "page": "Defining a Solver",
    "title": "Requirements for a Solver",
    "category": "section",
    "text": "Before getting into the implementation details, let\'s first go through what a POMDP solver must be able to do and support. We need three custom types that inherit from abstract types in POMDPs.jl. These type are Solver, Policy, and Updater. It is usually useful to have a custom type that represents the belief used by your policy as well.The requirements are as follows:# types\nQMDPSolver\nQMDPPolicy\nDiscreteUpdater # already implemented for us in BeliefUpdaters\nDiscreteBelief # already implemented for us in BeliefUpdaters\n# methods\nupdater(p::QMDPPolicy) # returns a belief updater suitable for use with QMDPPolicy\ninitialize_belief(bu::DiscreteUpdater, initial_state_dist) # returns a Discrete belief\nsolve(solver::QMDPSolver, pomdp::POMDP) # solves the POMDP and returns a policy\nupdate(bu::DiscreteUpdater, belief_old::DiscreteBelief, action, obs) # returns an updated belied (already implemented)\naction(policy::QMDPPolicy, b::DiscreteBelief) # returns a QMDP actionYou can find the implementations of these types and methods below."
},

{
    "location": "def_solver.html#Defining-the-Solver-and-Policy-Types-1",
    "page": "Defining a Solver",
    "title": "Defining the Solver and Policy Types",
    "category": "section",
    "text": "Let\'s first define the Solver type. The QMDP solver type should contain all the information needed to compute a policy (other than the problem itself). This information can be thought of as the hyperparameters of the solver. In QMDP, we only need two hyper-parameters. We may want to set the maximum number of iterations that the algorithm runs for, and a tolerance value (also known as the Bellman residual). Both of these quantities define terminating criteria for the algorithm. The algorithm stops either when the maximum number of iterations has been reached or when the infinity norm of the difference in utility values between two iterations goes below the tolerance value. The type definition has the form:using POMDPs # first load the POMDPs module\ntype QMDPSolver <: Solver\n    max_iterations::Int64 # max number of iterations QMDP runs for\n    tolerance::Float64 # Bellman residual: terminates when max||Ut-Ut-1|| < tolerance\nend\n# default constructor\nQMDPSolver(;max_iterations::Int64=100, tolerance::Float64=1e-3) = QMDPSolver(max_iterations, tolerance)Note that the QMDPSolver inherits from the abstract Solver type that\'s part of POMDPs.jl.Now, let\'s define a policy type. In general, the policy should contain all the information needed to map a belief to an action. As mentioned earlier, we need alpha vectors to be part of our policy. We can represent the alpha vectors using a matrix of size mathcalS times mathcalA. Recall that in POMDPs.jl, the actions can be represented in a number of ways (Int64, concrete types, etc), so we need a way to map these actions to integers so we can index into our alpha matrix. The type looks like:using POMDPModelTools # for ordered_actions\n\ntype QMDPPolicy <: Policy\n    alphas::Matrix{Float64} # matrix of alpha vectors |S|x|A|\n    action_map::Vector{Any} # maps indices to actions\n    pomdp::POMDP            # models for convenience\nend\n# default constructor\nfunction QMDPPolicy(pomdp::POMDP)\n    ns = n_states(pomdp)\n    na = n_actions(pomdp)\n    alphas = zeros(ns, na)\n    am = Any[]\n    space = ordered_actions(pomdp)\n    for a in iterator(space)\n        push!(am, a)\n    end\n    return QMDPPolicy(alphas, am, pomdp)\nendNow that we have our solver and policy types, we can write the solve function to compute the policy."
},

{
    "location": "def_solver.html#Writing-the-Solve-Function-1",
    "page": "Defining a Solver",
    "title": "Writing the Solve Function",
    "category": "section",
    "text": "The solve function takes in a solver, a POMDP, and an optional policy argument. Let\'s compute those alpha vectors!function POMDPs.solve(solver::QMDPSolver, pomdp::POMDP)\n\n    policy = QMDPPolicy(pomdp)\n\n    # get solver parameters\n    max_iterations = solver.max_iterations\n    tolerance = solver.tolerance\n    discount_factor = discount(pomdp)\n\n    # intialize the alpha-vectors\n    alphas = policy.alphas\n\n    # initalize space\n    sspace = ordered_states(pomdp)  # returns a discrete state space object of the pomdp\n    aspace = ordered_actions(pomdp) # returns a discrete action space object\n\n    # main loop\n    for i = 1:max_iterations\n        residual = 0.0\n        # state loop\n        for (istate, s) in enumerate(sspace)\n            old_alpha = maximum(alphas[istate,:]) # for residual\n            max_alpha = -Inf\n            # action loop\n            # alpha(s) = R(s,a) + discount_factor * sum(T(s\'|s,a)max(alpha(s\'))\n            for (iaction, a) in enumerate(aspace)\n                # the transition function modifies the dist argument to a distribution availible from that state-action pair\n                dist = transition(pomdp, s, a) # fills distribution over neighbors\n                q_new = 0.0\n                for sp in iterator(dist)\n                    # pdf returns the probability mass of sp in dist\n                    p = pdf(dist, sp)\n                    p == 0.0 ? continue : nothing # skip if zero prob\n                    # returns the reward from s-a-sp triple\n                    r = reward(pomdp, s, a, sp)\n    \n                    # stateindex returns an integer\n                    sidx = stateindex(pomdp, sp)\n                    q_new += p * (r + discount_factor * maximum(alphas[sidx,:]))\n                end\n                new_alpha = q_new\n                alphas[istate, iaction] = new_alpha\n                new_alpha > max_alpha ? (max_alpha = new_alpha) : nothing\n            end # actiom\n            # update the value array\n            diff = abs(max_alpha - old_alpha)\n            diff > residual ? (residual = diff) : nothing\n        end # state\n        # check if below Bellman residual\n        residual < tolerance ? break : nothing\n    end # main\n    # return the policy\n    policy\nendAt each iteration, the algorithm iterates over the state space and computes an alpha vector for each action. There is a check at the end to see if the Bellman residual has been satisfied. The solve function assumes the following POMDPs.jl functions are implemented by the user of QMDP:states(pomdp) # (in ordered_states) returns a state space object of the pomdp\nactions(pomdp) # (in ordered_actions) returns the action space object of the pomdp\ntransition(pomdp, s, a) # returns the transition distribution for the s, a pair\nreward(pomdp, s, a, sp) # returns real valued reward from s, a, sp triple\npdf(dist, sp) # returns the probability of sp being in dist\nstateindex(pomdp, sp) # returns the integer index of sp (for discrete state spaces)Now that we have a solve function, we define the action function to let users evaluate the policy:using LinearAlgebra\n\nfunction POMDPs.action(policy::QMDPPolicy, b::DiscreteBelief)\n    alphas = policy.alphas\n    ihi = 0\n    vhi = -Inf\n    (ns, na) = size(alphas)\n    @assert length(b.b) == ns \"Length of belief and alpha-vector size mismatch\"\n    # see which action gives the highest util value\n    for ai = 1:na\n        util = dot(alphas[:,ai], b.b)\n        if util > vhi\n            vhi = util\n            ihi = ai\n        end\n    end\n    # map the index to action\n    return policy.action_map[ihi]\nend"
},

{
    "location": "def_solver.html#Belief-Updates-1",
    "page": "Defining a Solver",
    "title": "Belief Updates",
    "category": "section",
    "text": "Let\'s now talk about how we deal with beliefs. Since QMDP is a discrete POMDP solver, we can assume that the user will represent their belief as a probablity distribution over states. That means that we can also use a discrete belief to work with our policy! Lucky for us, the JuliaPOMDP organization contains tools that we can use out of the box for working with discrete beliefs. The POMDPToolbox package contains a DiscreteBelief type that does exactly what we need. The updater function allows us to declare that the DiscreteUpdater is the default updater to be used with a QMDP policy:using BeliefUpdaters # remeber to load the package that implements discrete beliefs for us\nPOMDPs.updater(p::QMDPPolicy) = DiscreteUpdater(p.pomdp) These are all the functions that you\'ll need to have a working POMDPs.jl solver. Let\'s now use existing benchmark models to evaluate it."
},

{
    "location": "def_solver.html#Evaluating-the-Solver-1",
    "page": "Defining a Solver",
    "title": "Evaluating the Solver",
    "category": "section",
    "text": "We\'ll use the POMDPModels package from JuliaPOMDP to initialize a Tiger POMDP problem and solve it with QMDP.using POMDPModels\nusing POMDPSimulators\n\n# initialize model and solver\npomdp = TigerPOMDP()\nsolver = QMDPSolver()\n\n# compute the QMDP policy\npolicy = solve(solver, pomdp)\n\n# initalize updater and belief\nb_up = updater(policy)\ninit_dist = initialstate_distribution(pomdp)\n\n# create a simulator object for recording histories\nsim_hist = HistoryRecorder(max_steps=100)\n\n# run a simulation\nr = simulate(sim_hist, pomdp, policy, b_up, init_dist)That\'s all you need to define a solver and evaluate its performance!"
},

{
    "location": "def_solver.html#Defining-Requirements-1",
    "page": "Defining a Solver",
    "title": "Defining Requirements",
    "category": "section",
    "text": "If you share your solver, in order to make it easy to use, specifying requirements as described here is highly recommended.[1] Decision Making Under Uncertainty: Theory and Application by Mykel J. Kochenderfer, MIT Press, 2015"
},

{
    "location": "def_updater.html#",
    "page": "Defining a Belief Updater",
    "title": "Defining a Belief Updater",
    "category": "page",
    "text": ""
},

{
    "location": "def_updater.html#Defining-a-Belief-Updater-1",
    "page": "Defining a Belief Updater",
    "title": "Defining a Belief Updater",
    "category": "section",
    "text": "In this section we list the requirements for defining a belief updater. For a description of what a belief updater is, see Concepts and Architecture - Beliefs and Updaters. Typically a belief updater will have an associated belief type, and may be closely tied to a particular policy/planner."
},

{
    "location": "def_updater.html#Defining-a-Belief-Type-1",
    "page": "Defining a Belief Updater",
    "title": "Defining a Belief Type",
    "category": "section",
    "text": "A belief object should contain all of the information needed for the next belief update and for the policy to make a decision. The belief type could be a pre-defined type such as a distribution from Distributions.jl or DiscreteBelief or SparseCat from POMDPModelTools.jl, or it could be a custom type.Often, but not always, the belief will represent a probability distribution. In this case, the functions in the distribution interface should be implemented if possible. Implementing these functions will make the belief usable with many of the policies and planners in the POMDPs.jl ecosystem, and will make it easy for others to convert between beliefs and to interpret what a belief means."
},

{
    "location": "def_updater.html#Defining-an-Updater-1",
    "page": "Defining a Belief Updater",
    "title": "Defining an Updater",
    "category": "section",
    "text": "To create an updater, one should define a subtype of the Updater abstract type and implement two methods, one to create the initial belief from the problem\'s initial state distribution and one to perform a belief update:initialize_belief(updater, d) creates a belief from state distribution d appropriate to use with the updater. To extract information from d, use the functions from the distribution interface.\nupdate(updater, b, a, o) returns an updated belief given belief b, action a, and observation o. One can usually expect b to be the same type returned by initialize_belief because a careful user will always call initialize_belief before update, but it would also be reasonable to implement update for b of a different type if it is desirable to handle multiple belief types."
},

{
    "location": "def_updater.html#Example:-History-Updater-1",
    "page": "Defining a Belief Updater",
    "title": "Example: History Updater",
    "category": "section",
    "text": "One trivial type of belief would be the action-observation history, a list containing the initial state distribution and every action taken and observation received. The history contains all of the information received up to the current time, but it is not usually very useful because most policies make decisions based on a state probability distribution. Here the belief type is simply the built in Vector{Any}, so we need only create the updater and write update and initialize_belief. Normally, update would contain belief update probability calculations, but in this example, we simply append the action and observation to the history.(Note that this example is designed for readability rather than efficiency.)import POMDPs\n\nstruct HistoryUpdater <: POMDPs.Updater end\n\ninitialize_belief(up::HistoryUpdater, d) = Any[d]\n\nfunction POMDPs.update(up::HistoryUpdater, b, a, o)\n    bp = copy(b)\n    push!(bp, a)\n    push!(bp, o)\n    return bp\nendAt each step, the history starts with the original distribution, then contains all the actions and observations received up to that point. The example below shows this for the crying baby problem (observations are true/false for crying and actions are true/false for feeding).using POMDPPolicies\nusing POMDPSimulators\nusing POMDPModels\nusing Random\n\npomdp = BabyPOMDP()\npolicy = RandomPolicy(pomdp, rng=MersenneTwister(1))\nup = HistoryUpdater()\n\n# within stepthrough initialize_belief is called on the initial state distribution of the pomdp, then update is called at each step.\nfor b in stepthrough(pomdp, policy, up, \"b\", rng=MersenneTwister(2), max_steps=5)\n    @show b\nend\n\n# output\n\nb = Any[POMDPModels.BoolDistribution(0.0)]\nb = Any[POMDPModels.BoolDistribution(0.0), false, false]\nb = Any[POMDPModels.BoolDistribution(0.0), false, false, false, false]\nb = Any[POMDPModels.BoolDistribution(0.0), false, false, false, false, true, false]\nb = Any[POMDPModels.BoolDistribution(0.0), false, false, false, false, true, false, true, false]"
},

{
    "location": "explicit.html#",
    "page": "Explicit POMDP Interface",
    "title": "Explicit POMDP Interface",
    "category": "page",
    "text": ""
},

{
    "location": "explicit.html#explicit_doc-1",
    "page": "Explicit POMDP Interface",
    "title": "Explicit POMDP Interface",
    "category": "section",
    "text": "When using the explicit interface, the transition and observation probabilities must be explicitly defined. This section gives examples of two ways to define a discrete POMDP that is widely used in the literature.Note that there is no requirement that a problem defined using the explicit interface be discrete; it is equally easy to define a continuous problem using the explicit interface."
},

{
    "location": "explicit.html#Functional-Form-Explicit-POMDP-1",
    "page": "Explicit POMDP Interface",
    "title": "Functional Form Explicit POMDP",
    "category": "section",
    "text": "In this example we show how to implement the famous Tiger Problem.In this implementation of the problem we will assume that the agent get a reward of -1 for listening at the door, a reward of -100 for encountering the tiger, and a reward of 10 for escaping. The probability of hearing the tiger when listing at the tiger\'s door is 85%, and the discount factor is a parameter in the TigerPOMDP object.We define the Tiger POMDP type:using POMDPs\ntype TigerPOMDP <: POMDP{Bool, Int64, Bool}\n    discount_factor::Float64\nend\nTigerPOMDP() = TigerPOMDP(0.95) # default contructor\ndiscount(pomdp::TigerPOMDP) = pomdp.discount_factorNotice that the TigerPOMDP inherits from the abstract POMDP type provided by POMDPs.jl. Our type is defined TigerPOMDP <: POMDP{Bool, Int64, Bool}, indicating that our states are Bools, actions are Int64, and observations are Bool. In our problem there are only two states (whether the tiger is behind the left or right door), three actions (go left, go right, and listen), and two observations (hear the tiger behind the left or right door). We thus use booleans for the states and observations, and integers for the actions. Note that states, actions, and observations can use arrays, strings, complex data structures, or even custom types.Suppose that once implemented, we want to solve Tiger problems using the QMDP solver. To see what functions QMDP needs us to implement, use the @requirements_info macro (see Interface Requirements for Problems).import Pkg\nPkg.add(\"QMDP\")\nusing QMDP\n@requirements_info QMDPSolver() TigerPOMDP() We will begin by implementing the state, action, and observation spaces and functions for initializing them and sampling from them.# STATE SPACE\nconst TIGER_ON_LEFT = true\nconst TIGER_ON_RIGHT = false\n\nstates(pomdp::TigerPOMDP) = [TIGER_ON_LEFT, TIGER_ON_RIGHT]\nn_states(pomdp::TigerPOMDP) = 2\n\n# ACTION SPACE\nconst OPEN_LEFT = 0\nconst OPEN_RIGHT = 1\nconst LISTEN = 2\n\nactions(pomdp::TigerPOMDP) = [OPEN_LEFT,OPEN_RIGHT,LISTEN]\nn_actions(pomdp::TigerPOMDP) = 3\nactionindex(::TigerPOMDP, a::Int64) = a+1\n\n# OBSERVATION SPACE\nconst OBSERVE_LEFT = true\nconst OBSERVE_RIGHT = false\n\nobservations(::TigerPOMDP) = [OBSERVE_LEFT, OBSERVE_RIGHT]\nn_observations(::TigerPOMDP) = 2Before we can implement the core transition, reward, and observation functions we need to define how distributions over states and observations work for the Tiger POMDP. We need to sample from these distributions and compute their likelihoods. Are states and observations are binary, so we can use Bernoulli distributions:type TigerDistribution\n    p_true::Float64\nend\nTigerDistribution() = TigerDistribution(0.5) # default constructor\niterator(d::TigerDistribution) = [true, false]\n\n# returns the probability mass for discrete distributions\nfunction pdf(d::TigerDistribution, v::Bool)\n    if v\n        return d.p_true\n    else\n        return 1 - d.p_true\n    end\nend\n\n# sample from the distribution\nrand(rng::AbstractRNG, d::TigerDistribution) = rand(rng) ≤ d.p_trueWe can now define our transition, observation, and reward functions. Transition and observation return the distribution over the next state and observation, and reward returns the scalar reward.function transition(pomdp::TigerPOMDP, s::Bool, a::Int64)\n    d = TigerDistribution()\n    if a == OPEN_LEFT || a == OPEN_RIGHT\n        d.p_true = 0.5 # reset the tiger\'s location, which is what QMDP wants\n    elseif s == TIGER_ON_LEFT\n        d.p_true = 1.0 # tiger is on left\n    else\n        d.p_true = 0.0  # tiger is on right\n    end\n    d\nend\n\nfunction observation(pomdp::TigerPOMDP, a::Int64, sp::Bool)\n    d = TigerDistribution()\n    # obtain correct observation 85% of the time\n    if a == LISTEN\n        d.p_true = sp == TIGER_ON_LEFT ? 0.85 : 0.15\n    else\n        d.p_true = 0.5 # reset the observation - we did not listen\n    end\n    d\nend\nobservation(pomdp::TigerPOMDP, s::Bool, a::Int64, sp::Bool) = observation(pomdp, a, sp) # convenience function\n\nfunction reward(pomdp::TigerPOMDP, s::Bool, a::Int64)\n    # rewarded for escaping, penalized for listening and getting caught\n    r = 0.0\n    if a == LISTEN\n        r -= 1.0 # action penalty\n    elseif (a == OPEN_LEFT && s == TIGER_ON_LEFT) ||\n           (a == OPEN_RIGHT && s == TIGER_ON_RIGHT)\n        r -= 100.0 # eaten by tiger\n    else\n        r += 10.0 # opened the correct door\n    end\n    r\nend\nreward(pomdp::TigerPOMDP, s::Bool, a::Int64, sp::Bool) = reward(pomdp, s, a) # convenience functionThe last thing we need for the Tiger POMDP is an initial distribution over the state space. In POMDPs.jl we make a strong distinction between this distribution and a belief. In most literature these two concepts are considered the same. However, in more general terms, a belief is something that is mapped to an action using a POMDP policy. If the policy is represented as something other than alpha-vectors (a policy graph, tree, or a recurrent neural network to give a few examples), it may not make sense to think of a belief as a probability distribution over the state space. Thus, in POMDPs.jl we abstract the concept of a belief beyond a probability distribution, allowing users to use what makes the most sense.In order to reconcile this difference, each policy has a function called initialize_belief which takes in an initial state distriubtion and a policy, and converts the distribution into what we call a belief in POMDPs.jl. As the problem writer we must provide initialstate_distribution:initialstate_distribution(pomdp::TigerPOMDP) = TigerDistribution(0.5)We have fully defined the Tiger POMDP. We can use now use JuliaPOMDP solvers to compute and evaluate a policy:using QMDP, POMDPSimulators\n\npomdp = TigerPOMDP()\nsolver = QMDPSolver()\npolicy = solve(solver, pomdp)\n\ninit_dist = initialstate_distribution(pomdp)\nhist = HistoryRecorder(max_steps=100) # from POMDPToolbox\nr = simulate(hist, pomdp, policy) # run 100 step simulationPlease note that you do not need to define all the functions for most solvers. If you want to use a specific solver, you usually only need a subset of what is above. Notably, when the problem only requires a generative model, you need not define any distributions. See Interface Requirements for Problems."
},

{
    "location": "explicit.html#Tabular-Form-Explicit-POMDP-1",
    "page": "Explicit POMDP Interface",
    "title": "Tabular Form Explicit POMDP",
    "category": "section",
    "text": "The DiscretePOMDP problem representation allows you to specify discrete POMDP problems in tabular form. If you can write the transition probabilities, observation probabilities, and rewards in matrix form, you can use the DiscreteMDP or DiscretePOMDP types from POMDPModels which automatically implements all required functionality. Let us do this with the Tiger POMDP:using POMDPModels\n\n# write out the matrix forms\n\n# REWARDS\nR = [-1. -100 10; -1 10 -100] # |S|x|A| state-action pair rewards\n\n# TRANSITIONS\nT = zeros(2,3,2) # |S|x|A|x|S|, T[s\', a, s] = p(s\'|a,s)\nT[:,:,1] = [1. 0.5 0.5; 0 0.5 0.5]\nT[:,:,2] = [0. 0.5 0.5; 1 0.5 0.5]\n\n# OBSERVATIONS\nO = zeros(2,3,2) # |O|x|A|x|S|, O[o, a, s] = p(o|a,s)\nO[:,:,1] = [0.85 0.5 0.5; 0.15 0.5 0.5]\nO[:,:,2] = [0.15 0.5 0.5; 0.85 0.5 0.5]\n\ndiscount = 0.95\npomdp = DiscretePOMDP(T, R, O, discount)\n\n# solve the POMDP the same way\nsolver = QMDPSolver()\npolicy = solve(solver, pomdp)It is often easiest to define smaller problems in tabular form. However, for larger problems it can be tedious and the functional form may be preferred. You can usually use any supported POMDP solver to solve these types of problems (the performance of the policy may vary however - SARSOP will usually outperform QMDP)."
},

{
    "location": "faq.html#",
    "page": "Frequently Asked Questions (FAQ)",
    "title": "Frequently Asked Questions (FAQ)",
    "category": "page",
    "text": ""
},

{
    "location": "faq.html#Frequently-Asked-Questions-(FAQ)-1",
    "page": "Frequently Asked Questions (FAQ)",
    "title": "Frequently Asked Questions (FAQ)",
    "category": "section",
    "text": ""
},

{
    "location": "faq.html#Why-am-I-getting-a-\"No-implementation-for-...\"-error?-1",
    "page": "Frequently Asked Questions (FAQ)",
    "title": "Why am I getting a \"No implementation for ...\" error?",
    "category": "section",
    "text": "You will typically see this error when you haven\'t implemented a function that a solver is trying to call. For example, if you are using the QMDP solver, and have not implemented num_states for your POMDP, you will see the no implementation error. To fix the error, you need to create a num_states function that takes in your POMDP. To see the required functions for a given solver you can run:using QMDP\nQMDP.required_methods()"
},

{
    "location": "faq.html#How-do-I-save-my-policies?-1",
    "page": "Frequently Asked Questions (FAQ)",
    "title": "How do I save my policies?",
    "category": "section",
    "text": "We recommend using JLD to save the whole policy object. This is a simple and fairly efficient way to save Julia objects. JLD uses the HDF5 format underneath. To save a computed policy, run:using JLD\nsave(\"my_policy.jld\", \"policy\", policy)"
},

{
    "location": "faq.html#Why-isn\'t-the-solver-working?-1",
    "page": "Frequently Asked Questions (FAQ)",
    "title": "Why isn\'t the solver working?",
    "category": "section",
    "text": "There could be a number of things that are going wrong. Remeber, POMDPs can be failry hard to work with, but don\'t panic.  If you have a discrete POMDP or MDP and you\'re using a solver that requires the explicit transition probabilities (you\'ve implemented a pdf function), the first thing to try is make sure that your probability masses sum up to unity.  We\'ve provide some tools in POMDPToolbox that can check this for you. If you have a POMDP called pomdp, you can run the checks by doing the following:using POMDPTesting\nprobability_check(pomdp) # checks that both observation and transition functions give probs that sum to unity\nobs_prob_consistency_check(pomdp) # checks the observation probabilities\ntrans_prob_consistency_check(pomdp) # check the transition probabilitiesIf these throw an error, you may need to fix your transition or observation functions. "
},

{
    "location": "faq.html#Why-do-I-need-to-put-type-assertions-pomdp::POMDP-into-the-function-signature?-1",
    "page": "Frequently Asked Questions (FAQ)",
    "title": "Why do I need to put type assertions pomdp::POMDP into the function signature?",
    "category": "section",
    "text": "Specifying the type in your function signature allows Julia to call the appropriate function when your custom type is passed into it. For example if a POMDPs.jl solver calls states on the POMDP that you passed into it, the correct states function will only get dispatched if you specified that the states function you wrote works with your POMDP type. Because Julia supports multiple-dispatch, these type assertion are a way for doing object-oriented programming in Julia."
},

{
    "location": "faq.html#Why-are-all-the-solvers-in-separate-modules?-1",
    "page": "Frequently Asked Questions (FAQ)",
    "title": "Why are all the solvers in separate modules?",
    "category": "section",
    "text": "We did not put all the solvers and support tools into POMDPs.jl, because we wanted POMDPs.jl to be a lightweight interface package. This has a number of advantages. The first is that if a user only wants to use a few solvers from the JuliaPOMDP organization, they do not have to install all the other solvers and their dependencies. The second advantage is that people who are not directly part of the JuliaPOMDP organization can write their own solvers without going into the source code of other solvers. This makes the framework easier to adopt and to extend."
},

{
    "location": "faq.html#How-can-I-implement-terminal-actions?-1",
    "page": "Frequently Asked Questions (FAQ)",
    "title": "How can I implement terminal actions?",
    "category": "section",
    "text": "Terminal actions are actions that cause the MDP to terminate without generating a new state. POMDPs.jl handles terminal conditions via the isterminal function on states, and does not directly support terminal actions. If your MDP has a terminal action, you need to implement the model functions accordingly to generate a terminal state. In both generative and explicit cases, you will need some dummy state, say spt, that can be recognized as terminal by the isterminal function. One way to do this is to give spt a state value that is out of bounds (e.g. a vector of NaNs or -1s) and then check for that in isterminal, so that this does not clash with any conventional termination conditions on the state.If a terminal action is taken, regardless of current state, the transition function should return a distribution with only one next state, spt, with probability 1.0. In the generative case, the new state generated should be spt. The reward function or the r in generate_sr can be set according to the cost of the terminal action."
},

{
    "location": "generative.html#",
    "page": "Generative POMDP Interface",
    "title": "Generative POMDP Interface",
    "category": "page",
    "text": ""
},

{
    "location": "generative.html#generative_doc-1",
    "page": "Generative POMDP Interface",
    "title": "Generative POMDP Interface",
    "category": "section",
    "text": ""
},

{
    "location": "generative.html#Description-1",
    "page": "Generative POMDP Interface",
    "title": "Description",
    "category": "section",
    "text": "The generative interface contains a small collection of functions that makes implementing and solving problems with generative models easier. These functions return states and observations instead of distributions as in the Explicit interface.The generative interface functions are the following (note that this is not actual julia code):generate_s(pomdp, s, a, rng) -> sp\ngenerate_o(pomdp, s, a, sp, rng) -> o\ngenerate_sr(pomdp, s, a, rng) -> (s, r)\ngenerate_so(pomdp, s, a, rng) -> (s, o)\ngenerate_or(pomdp, s, a, sp, rng) -> (o, r)\ngenerate_sor(pomdp, s, a, rng) -> (s, o, r)\ninitialstate(pomdp, rng) -> sEach generate_ function is a single step simulator that returns a new state, observation, reward, or a combination given the current state and action (and sp in some cases). rng is a random number generator such as Base.GLOBAL_RNG or another MersenneTwister that is passed as an argument and should be used to generate all random numbers within the function to ensure that all simulations are exactly repeatable.The functions that do not deal with observations may be defined for MDPs as well as POMDPs.A problem writer will generally only have to implement one or two of these functions for all solvers to work (see below)."
},

{
    "location": "generative.html#Example-1",
    "page": "Generative POMDP Interface",
    "title": "Example",
    "category": "section",
    "text": "An example of defining a problem with the generative interface can be found at https://github.com/JuliaPOMDP/POMDPExamples.jl/blob/master/notebooks/Defining-a-POMDP-with-the-Generative-Interface.ipynb"
},

{
    "location": "generative.html#Which-function(s)-should-I-implement-for-my-problem-/-use-in-my-solver?-1",
    "page": "Generative POMDP Interface",
    "title": "Which function(s) should I implement for my problem / use in my solver?",
    "category": "section",
    "text": ""
},

{
    "location": "generative.html#Problem-Writers-1",
    "page": "Generative POMDP Interface",
    "title": "Problem Writers",
    "category": "section",
    "text": "Generally, a problem implementer need only implement the simplest one or two of these functions, and the rest are automatically synthesized at runtime.If there is a convenient way for the problem to generate a combination of states, observations, and rewards simultaneously (for example, if there is a simulator written in another programming language that generates these from the same function, or if it is computationally convenient to generate sp and o simultaneously), then the problem writer may wish to directly implement one of the combination generate_ functions, e.g. generate_sor() directly.Use the following logic to determine which functions to implement:If you are implementing the problem from scratch in Julia, implement generate_s and generate_o.\nOtherwise, if your external simulator returns x, where x is one of sr, so, or, or sor, implement generate_x. (you may also have to implement generate_s separately for use in particle filters).Note: if an explicit definition is already implemented, you do not need to implement any functions from the generative interface - POMDPs.jl will automatically generate implementations of them for you at runtime (see generative_impl.jl)."
},

{
    "location": "generative.html#Solver-and-Simulator-Writers-1",
    "page": "Generative POMDP Interface",
    "title": "Solver and Simulator Writers",
    "category": "section",
    "text": "Solver writers should use the single function that generates everything that they need and nothing they don\'t. For example, if the solver needs access to the state, observation, and reward at every timestep, they should use generate_sor() rather than generate_s() and generate_or(), and if the solver needs access to the state and reward, they should use generate_sr() rather than generate_sor(). This will ensure the widest interoperability between solvers and problems.In other words, if you need access to x where x is s, o, sr, so, or, or sor at a certain point in your code, use generate_x.[1] Decision Making Under Uncertainty: Theory and Application by Mykel J. Kochenderfer, MIT Press, 2015"
},

{
    "location": "get_started.html#",
    "page": "Getting Started",
    "title": "Getting Started",
    "category": "page",
    "text": ""
},

{
    "location": "get_started.html#Getting-Started-1",
    "page": "Getting Started",
    "title": "Getting Started",
    "category": "section",
    "text": "Before writing our own POMDP problems or solvers, let\'s try out some of the available solvers and problem models available in JuliaPOMDP.Here is a short piece of code that solves the Tiger POMDP using QMDP, and evaluates the results. Note that you must have the QMDP, POMDPModels, and POMDPToolbox modules installed.using QMDP, POMDPModels, POMDPSimulators\n\n# initialize problem and solver\npomdp = TigerPOMDP() # from POMDPModels\nsolver = QMDPSolver() # from QMDP\n\n# compute a policy\npolicy = solve(solver, pomdp)\n\n#evaluate the policy\nbelief_updater = updater(policy) # the default QMPD belief updater (discrete Bayesian filter)\ninit_dist = initialstate_distribution(pomdp) # from POMDPModels\nhr = HistoryRecorder(max_steps=100) # from POMDPSimulators\nhist = simulate(hr, pomdp, policy, belief_updater, init_dist) # run 100 step simulation\nprintln(\"reward: $(discounted_reward(hist))\")The first part of the code loads the desired packages and initializes the problem and the solver. Next, we compute a POMDP policy. Lastly, we evaluate the results.There are a few things to mention here. First, the TigerPOMDP type implements all the functions required by QMDPSolver to compute a policy. Second, each policy has a default updater (essentially a filter used to update the belief of the POMDP). To learn more about Updaters check out the Concepts section."
},

{
    "location": "index.html#",
    "page": "POMDPs",
    "title": "POMDPs",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#POMDPs-1",
    "page": "POMDPs",
    "title": "POMDPs",
    "category": "section",
    "text": "A Julia interface for defining, solving and simulating partially observable Markov decision processes and their fully observable counterparts."
},

{
    "location": "index.html#Package-Features-1",
    "page": "POMDPs",
    "title": "Package Features",
    "category": "section",
    "text": "General interface that can handle problems with discrete and continuous state/action/observation spaces\nA number of popular state-of-the-art solvers available to use out of the box\nTools that make it easy to define problems and simulate solutions\nSimple integration of custom solvers into the existing interface"
},

{
    "location": "index.html#Available-Packages-1",
    "page": "POMDPs",
    "title": "Available Packages",
    "category": "section",
    "text": "The POMDPs.jl package contains the interface used for expressing and solving Markov decision processes (MDPs) and partially observable Markov decision processes (POMDPs) in the Julia programming language. The JuliaPOMDP community maintains these packages. The list of solver and support packages is maintained at the POMDPs.jl Readme."
},

{
    "location": "index.html#Manual-Outline-1",
    "page": "POMDPs",
    "title": "Manual Outline",
    "category": "section",
    "text": ""
},

{
    "location": "install.html#",
    "page": "Installation",
    "title": "Installation",
    "category": "page",
    "text": ""
},

{
    "location": "install.html#Installation-1",
    "page": "Installation",
    "title": "Installation",
    "category": "section",
    "text": "If you have a running Julia distribution (Julia 0.4 or greater), you have everything you need to install POMDPs.jl. To install the package, simply run the following from the Julia REPL:import Pkg\nPkg.add(\"POMDPs\") # installs the POMDPs.jl packageOnce you have POMDPs.jl installed, you can install any package that is part of the JuliaPOMDP community by running:using POMDPs, Pkg\nPOMDPs.add_registry()\nPkg.add(\"SARSOP\") # installs the SARSOP solverThe code above will download and install all dependencies automatically. All JuliaPOMDP packages have been tested on Linux and OS X, and most have been tested on Windows.To get a list of all the available packages run:POMDPs.available() # prints a list of all the available packages that can be installed with POMDPs.add"
},

{
    "location": "interfaces.html#",
    "page": "Spaces and Distributions",
    "title": "Spaces and Distributions",
    "category": "page",
    "text": ""
},

{
    "location": "interfaces.html#Spaces-and-Distributions-1",
    "page": "Spaces and Distributions",
    "title": "Spaces and Distributions",
    "category": "section",
    "text": "Two important components of the definitions of MDPs and POMDPs are spaces, which specify the possible states, actions, and observations in a problem and distributions, which define probability distributions. In order to provide for maximum flexibility spaces and distributions may be of any type (i.e. there are no abstract base types). Solvers and simulators will interact with space and distribution types using the functions defined below."
},

{
    "location": "interfaces.html#Spaces-1",
    "page": "Spaces and Distributions",
    "title": "Spaces",
    "category": "section",
    "text": "A space object should contain the information needed to define the set of all possible states, actions or observations. The implementation will depend on the attributes of the elements. For example, if the space is continuous, the space object may only contain the limits of the continuous range. In the case of a discrete problem, a vector containing all states is appropriate for representing a state.The following functions may be called on a space object (Click on a function to read its documentation):rand\ndimensions\nsampletype"
},

{
    "location": "interfaces.html#Distributions-1",
    "page": "Spaces and Distributions",
    "title": "Distributions",
    "category": "section",
    "text": "A distribution object represents a probability distribution.The following functions may be called on a distribution object (Click on a function to read its documentation):rand\nsupport\nsampletype\npdf\nmode\nmean"
},

{
    "location": "requirements.html#",
    "page": "Interface Requirements for Problems",
    "title": "Interface Requirements for Problems",
    "category": "page",
    "text": ""
},

{
    "location": "requirements.html#requirements-1",
    "page": "Interface Requirements for Problems",
    "title": "Interface Requirements for Problems",
    "category": "section",
    "text": "Due to the large variety of problems that can be expressed as MDPs and POMDPs and the wide variety of solution techniques available, there is considerable variation in which of the POMDPs.jl interface functions must be implemented to use each solver. No solver requires all of the functions in the interface, so it is wise to determine which functions are needed before jumping into implementation.Solvers can communicate these requirements through the @requirements_info and @show_requirements macros. @requirements_info should give an overview of the requirements for a solver, which is supplied as the first argument, the macro can usually be more informative if a problem is specified as the second arg. For example, if you are implementing a new problem NewMDP and want to use the DiscreteValueIteration solver, you might run the following:(Image: requirements_info for a new problem)Note that a few of the requirements could not be shown because actions is not implemented for the new problem.If you would like to see a list of all of the requirements for a solver, try running @requirements_info with a fully implemented model from POMDPModels, for example,(Image: requirements_info for a fully-implemented problem)@show_requirements is a lower-level tool that can be used to show the requirements for a specific function call, for example@show_requirements solve(ValueIterationSolver(), NewMDP())orpolicy = solve(ValueIterationSolver(), GridWorld())\n@show_requirements action(policy, GridWorldState(1,1))In some cases, a solver writer may not have specified the requirements, in which case the requirements query macros will output[No requirements specified]In this case, please file an issue on the solver\'s github page to encourage the solver writer to specify requirements."
},

{
    "location": "simulation.html#",
    "page": "Simulation Standard",
    "title": "Simulation Standard",
    "category": "page",
    "text": ""
},

{
    "location": "simulation.html#Simulation-Standard-1",
    "page": "Simulation Standard",
    "title": "Simulation Standard",
    "category": "section",
    "text": "In order to maintain consistency across the POMDPs.jl ecosystem, this page defines a standard for how simulations should be conducted. All simulators should be consistent with this page, and, if solvers are attempting to find an optimal POMDP policy, they should optimize the expected value of r_total below. In particular, this page should be consulted when questions about how less-obvious concepts like terminal states are handled.In most cases, users need not implement their own simulators. Several simulators that are compatible with the standard in this document are implemented in the POMDPSimulators package and allow interaction from a variety of perspectives."
},

{
    "location": "simulation.html#POMDP-Simulation-1",
    "page": "Simulation Standard",
    "title": "POMDP Simulation",
    "category": "section",
    "text": ""
},

{
    "location": "simulation.html#Inputs-1",
    "page": "Simulation Standard",
    "title": "Inputs",
    "category": "section",
    "text": "In general, POMDP simulations take up to 5 inputs (see the simulate function for documentation on arguments):pomdp::POMDP: pomdp model object (see POMDPs and MDPs)\npolicy::Policy: policy (see Solvers and Policies)\nup::Updater: belief updater (see Beliefs and Updaters)\nisd: initial state distribution\ns: initial stateThe last three of these inputs are optional. If they are not explicitly provided, they should be inferred using the following POMDPs.jl functions:up =updater(policy)\nisd =initialstate_distribution(pomdp)\ns =initialstate(pomdp, rng)In addition, a random number generator rng is assumed to be available."
},

{
    "location": "simulation.html#Simulation-Loop-1",
    "page": "Simulation Standard",
    "title": "Simulation Loop",
    "category": "section",
    "text": "The main simulation loop is shown below. Note that the isterminal check prevents any actions from being taken and reward from being collected from a terminal state.Before the loop begins, initialize_belief is called to create the belief based on the initial state distribution - this is especially important when the belief is solver specific, such as the finite-state-machine used by MCVI. b = initialize_belief(up, isd)\n\nr_total = 0.0\nd = 1.0\nwhile !isterminal(pomdp, s)\n    a = action(policy, b)\n    s, o, r = generate_sor(pomdp, s, a, rng)\n    r_total += d*r\n    d *= discount(pomdp)\n    b = update(up, b, a, o)\nendIn terms of the explicit interface, generate_sor above can be expressed as:function generate_sor(pomdp, s, a, rng)\n    sp = rand(rng, transition(pomdp, s, a))\n    o = rand(rng, observation(pomdp, s, a, sp))\n    r = reward(pomdp, s, a, sp)\n    return sp, o, r\nend"
},

{
    "location": "simulation.html#MDP-Simulation-1",
    "page": "Simulation Standard",
    "title": "MDP Simulation",
    "category": "section",
    "text": ""
},

{
    "location": "simulation.html#Inputs-2",
    "page": "Simulation Standard",
    "title": "Inputs",
    "category": "section",
    "text": "In general, MDP simulations take up to 3 inputs (see the simulate function for documentation on arguments):mdp::MDP: mdp model object (see POMDPs and MDPs)\npolicy::Policy: policy (see Solvers and Policies)\ns: initial stateThe last of these inputs is optional. If the initial state is not explicitly provided, it should be generated usings =initialstate(mdp, rng)In addition, a random number generator rng is assumed to be available."
},

{
    "location": "simulation.html#Simulation-Loop-2",
    "page": "Simulation Standard",
    "title": "Simulation Loop",
    "category": "section",
    "text": "The main simulation loop is shown below. Note again that the isterminal check prevents any actions from being taken and reward from being collected from a terminal state.r_total = 0.0\ndisc = 1.0\nwhile !isterminal(mdp, s)\n    a = action(policy, b)\n    s, r = generate_sr(mdp, s, a, rng)\n    r_total += d*r\n    d *= discount(mdp)\nendIn terms of the explicit interface, generate_sr above can be expressed as:function generate_sr(mdp, s, a, rng)\n    sp = rand(rng, transition(pomdp, s, a))\n    r = reward(pomdp, s, a, sp)\n    return sp, r\nend"
},

{
    "location": "specifying_requirements.html#",
    "page": "Specifying Requirements",
    "title": "Specifying Requirements",
    "category": "page",
    "text": ""
},

{
    "location": "specifying_requirements.html#specifying_requirements-1",
    "page": "Specifying Requirements",
    "title": "Specifying Requirements",
    "category": "section",
    "text": ""
},

{
    "location": "specifying_requirements.html#Purpose-1",
    "page": "Specifying Requirements",
    "title": "Purpose",
    "category": "section",
    "text": "When a researcher or student wants to use a solver in the POMDPs ecosystem, the first question they will ask is \"What do I have to implement to use this solver?\". The requirements interface provides a standard way for solver writers to answer this question."
},

{
    "location": "specifying_requirements.html#Internal-interface-1",
    "page": "Specifying Requirements",
    "title": "Internal interface",
    "category": "section",
    "text": "The most important functions in the requirements interface are get_requirements, check_requirements, and show_requirements.get_requirements(f::Function, args::Tuple{...}) should be implemented by a solver or simulator writer for all important functions that use the POMDPs.jl interface. In practice, this function will rarely by implemented directly because the @POMDP_require macro automatically creates it. The function should return a RequirementSet object containing all of the methods POMDPs.jl functions that need to be implemented for the function to work with the specified arguments.check_requirements returns true if all of the requirements in a RequirementSet are met, and show_requirements prints out a list of the requirements in a RequirementSet and indicates which ones have been met."
},

{
    "location": "specifying_requirements.html#pomdp_require_section-1",
    "page": "Specifying Requirements",
    "title": "@POMDP_require",
    "category": "section",
    "text": "The @POMDP_require macro is the main point of interaction with the requirements system for solver writers. It uses a special syntax to automatically implement get_requirements. This is best shown by example. Consider this @POMDP_require block from the DiscreteValueIteration package:@POMDP_require solve(solver::ValueIterationSolver, mdp::Union{MDP,POMDP}) begin\n    P = typeof(mdp)\n    S = statetype(P)\n    A = actiontype(P)\n    @req discount(::P)\n    @req n_states(::P)\n    @req n_actions(::P)\n    @subreq ordered_states(mdp)\n    @subreq ordered_actions(mdp)\n    @req transition(::P,::S,::A)\n    @req reward(::P,::S,::A,::S)\n    @req stateindex(::P,::S)\n    as = actions(mdp)\n    ss = states(mdp)\n    @req iterator(::typeof(as))\n    @req iterator(::typeof(ss))\n    s = first(iterator(ss))\n    a = first(iterator(as))\n    dist = transition(mdp, s, a)\n    D = typeof(dist)\n    @req iterator(::D)\n    @req pdf(::D,::S)\nendThe first expression argument to the macro is a function signature specifying what the requirements apply to. The above example implements get_requirements{P<:Union{POMDP,MDP}}(solve::typeof(solve), args::Tuple{ValueIterationSolver,P}) which will construct a RequirementSet containing the requirements for executing the solve function with ValueIterationSolver and MDP or POMDP arguments at runtime.The second expression is a begin-end block that specifies the requirements. The arguments in the function signature (solver and mdp in this example) may be used within the block.The @req macro is used to specify a required function. Each @req should be followed by a function with the argument types specified. The @subreq macro is used to denote that the requirements of another function are also required. Each @subreq should be followed by a function call."
},

{
    "location": "specifying_requirements.html#requirements_info-1",
    "page": "Specifying Requirements",
    "title": "requirements_info",
    "category": "section",
    "text": "While the @POMDP_require macro is used to specify requirements for a specific method, the requirements_info function is a more flexible communication tool for a solver writer. requirements_info should print out a message describing the requirements for a solver. The exact form of the message is up to the solver writer, but it should be carefully thought-out because problem-writers will be directed to call the function (via the @requirements_info macro) as the first step in using a new solver (see tutorial).By default, requirements_info calls show_requirements on the solve function. This is adequate in many cases, but in some cases, notably for online solvers such as MCTS, the requirements for solve do not give a good indication of the requirements for using the solver. Instead, the requirements for action should be displayed. The following example shows a more informative version of requirements_info from the MCTS package. Since action requires a state argument, requirements_info prompts the user to provide one.function POMDPs.requirements_info(solver::AbstractMCTSSolver, problem::Union{POMDP,MDP})\n    if statetype(typeof(problem)) <: Number\n        s = one(statetype(typeof(problem)))\n        requirements_info(solver, problem, s)\n    else\n        println(\"\"\"\n            Since MCTS is an online solver, most of the computation occurs in `action(policy, state)`. In order to view the requirements for this function, please, supply a state as the third argument to `requirements_info`, e.g.\n\n                @requirements_info $(typeof(solver))() $(typeof(problem))() $(statetype(typeof(problem)))()\n\n                \"\"\")\n    end\nend\n\nfunction POMDPs.requirements_info(solver::AbstractMCTSSolver, problem::Union{POMDP,MDP}, s)\n    policy = solve(solver, problem)\n    requirements_info(policy, s)\nend\n\nfunction POMDPs.requirements_info(policy::AbstractMCTSPolicy, s)\n    @show_requirements action(policy, s)\nend"
},

{
    "location": "specifying_requirements.html#@warn_requirements-1",
    "page": "Specifying Requirements",
    "title": "@warn_requirements",
    "category": "section",
    "text": "The @warn_requirements macro is a useful tool to improve usability of a solver. It will show a requirements list only if some requirements are not met. It might be used, for example, in the solve function to give a problem writer a useful error if some required methods are missing (assuming the solver writer has already used @POMDP_require to specify the requirements for solve):function solve(solver::ValueIterationSolver, mdp::Union{POMDP, MDP})\n    @warn_requirements solve(solver, mdp)\n\n    # do the work of solving\nend@warn_requirements does perform a runtime check of requirements every time it is called, so it should not be used in code that may be used in fast, high-performance loops."
},

{
    "location": "specifying_requirements.html#implemented_section-1",
    "page": "Specifying Requirements",
    "title": "Determining whether a function is implemented",
    "category": "section",
    "text": "When checking requirements in check_requirements, or printing in show_requirements, the implemented function is used to determine whether an implementation for a function is available. For example implemented(discount, Tuple{NewPOMDP}) should return true if the writer of the NewPOMDP problem has implemented discount for their problem. In most cases, the default implementation,implemented(f::Function, TT::TupleType) = method_exists(f, TT)will automatically handle this, but there may be cases in which you want to override the behavior of implemented, for example, if the function can be synthesized from other functions. Examples of this can be found in the default implementations of the generative interface funcitons."
},

]}
