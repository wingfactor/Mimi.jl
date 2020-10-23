module TestDelete

# Test the behavior of the `delete!` function with and without the `delete_unbound_comp_params` kwarg.

using Mimi
using Test

@defcomp A begin
    p1 = Parameter()
    p2 = Parameter()
end

function _get_model()
    m = Model()
    add_comp!(m, A, :A1)
    add_comp!(m, A, :A2)
    set_param!(m, :p1, 1)
    set_param!(m, :A1, :p2, :p2_A1, 21)
    set_param!(m, :A2, :p2, :p2_A2, 22)
    return m
end

# Test component deletion without removing unbound component parameters
m1 = _get_model()
@test length(Mimi.components(m1.md)) == 2
@test length(m1.md.external_param_conns) == 4   # two components with two connections each
@test length(m1.md.external_params) == 3        # three total external params 
delete!(m1, :A1)
@test length(Mimi.components(m1.md)) == 1
@test length(m1.md.external_param_conns) == 2   # Component A1 deleted, so only two connections left
@test length(m1.md.external_params) == 3        # but all three external params remain
@test :p2_A1 in keys(m2.md.external_params)

# Test component deletion that removes unbound component parameters
m2 = _get_model()
delete!(m2, :A1, delete_unbound_comp_params = true)
@test length(Mimi.components(m2.md)) == 1
@test length(m2.md.external_params) == 2        # :p2_A1 has been removed
@test !(:p2_A1 in keys(m2.md.external_params))

end